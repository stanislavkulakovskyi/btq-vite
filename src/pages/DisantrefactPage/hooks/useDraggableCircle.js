import { useEffect, useRef } from 'react';

const SIZE_RATIO = 0.5;
const STACK_SIZE_RATIO = 0.42;
const STACK_BREAKPOINT = 1140;
const DRAG_THRESHOLD = 6;
const REVEAL_THRESHOLD_RATIO = 0.22;
const REVEAL_RANGE_RATIO = 0.4;
const RETURN_TRANSITION =
  'left .55s cubic-bezier(.25,.46,.45,.94),top .55s cubic-bezier(.25,.46,.45,.94)';
const SETTLE_MS = 560;

const createDragController = (wrap, micro, onTapRef) => {
  const state = {
    isDragging: false,
    hasMoved: false,
    startX: 0,
    startY: 0,
    originLeft: 0,
    originTop: 0,
    size: 0,
    centerX: 0,
    centerY: 0,
  };
  let settleTimer;

  const layout = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ratio = width <= STACK_BREAKPOINT ? STACK_SIZE_RATIO : SIZE_RATIO;
    state.size = Math.min(width, height) * ratio;
    state.centerX = width / 2;
    state.centerY = height / 2;
    Object.assign(wrap.style, {
      width: `${state.size}px`,
      height: `${state.size}px`,
      left: `${state.centerX - state.size / 2}px`,
      top: `${state.centerY - state.size / 2}px`,
    });
  };

  const start = (x, y) => {
    state.isDragging = true;
    state.hasMoved = false;
    state.startX = x;
    state.startY = y;
    const rect = wrap.getBoundingClientRect();
    state.originLeft = rect.left;
    state.originTop = rect.top;
    wrap.style.transition = '';
  };

  const move = (x, y) => {
    if (!state.isDragging) return;
    const dx = x - state.startX;
    const dy = y - state.startY;
    if (Math.hypot(dx, dy) > DRAG_THRESHOLD) state.hasMoved = true;
    const left = state.originLeft + dx;
    const top = state.originTop + dy;
    wrap.style.left = `${left}px`;
    wrap.style.top = `${top}px`;
    const centerDist = Math.hypot(
      left + state.size / 2 - state.centerX,
      top + state.size / 2 - state.centerY,
    );
    const threshold = state.size * REVEAL_THRESHOLD_RATIO;
    const reveal = (centerDist - threshold) / (state.size * REVEAL_RANGE_RATIO);
    micro.style.opacity = Math.min(1, Math.max(0, reveal));
  };

  const end = () => {
    if (!state.isDragging) return;
    state.isDragging = false;
    if (!state.hasMoved) onTapRef.current();
    wrap.style.transition = RETURN_TRANSITION;
    wrap.style.left = `${state.centerX - state.size / 2}px`;
    wrap.style.top = `${state.centerY - state.size / 2}px`;
    settleTimer = setTimeout(() => {
      micro.style.opacity = 0;
      wrap.style.transition = '';
    }, SETTLE_MS);
  };

  return { layout, start, move, end, dispose: () => clearTimeout(settleTimer) };
};

export const useDraggableCircle = (wrapRef, microRef, onTap) => {
  const onTapRef = useRef(onTap);
  onTapRef.current = onTap;

  useEffect(() => {
    const wrap = wrapRef.current;
    const micro = microRef.current;
    if (!wrap || !micro) return undefined;

    const ctrl = createDragController(wrap, micro, onTapRef);

    const onMouseDown = (e) => {
      ctrl.start(e.clientX, e.clientY);
      e.preventDefault();
    };
    const onMouseMove = (e) => ctrl.move(e.clientX, e.clientY);
    const onTouchStart = (e) => {
      ctrl.start(e.touches[0].clientX, e.touches[0].clientY);
      e.preventDefault();
    };
    const onTouchMove = (e) => {
      ctrl.move(e.touches[0].clientX, e.touches[0].clientY);
      e.preventDefault();
    };

    ctrl.layout();
    window.addEventListener('resize', ctrl.layout);
    wrap.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', ctrl.end);
    wrap.addEventListener('touchstart', onTouchStart, { passive: false });
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', ctrl.end);

    return () => {
      ctrl.dispose();
      window.removeEventListener('resize', ctrl.layout);
      wrap.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', ctrl.end);
      wrap.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', ctrl.end);
    };
  }, [wrapRef, microRef]);
};
