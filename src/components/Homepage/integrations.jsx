import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useSpring, animated } from 'react-spring';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import int1 from '../../assets/int-1.png';
import int2 from '../../assets/int-2.png';
import int3 from '../../assets/int-3.png';
import int4 from '../../assets/int-4.png';
import int5 from '../../assets/int-5.png';
import int6 from '../../assets/int-6.png';
import int7 from '../../assets/int-7.png';
import int8 from '../../assets/int-8.png';
import int9 from '../../assets/int-9.png';
import int10 from '../../assets/int-10.png';
import midicon from '../../assets/midlogo.png';

gsap.registerPlugin(MotionPathPlugin);

const Integrations = () => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  // Left side icons (5 icons) - with varying sizes
  const leftIcons = [
    { id: 'left1', img: int1, top: 8, left: 5, size: 'large' },
    { id: 'left2', img: int2, top: 15, left: 20, size: 'medium' },
    { id: 'left3', img: int6, top: 45, left: 10, size: 'large' },
    { id: 'left4', img: int7, top: 70, left: 12, size: 'small' },
    { id: 'left5', img: int8, top: 82, left: 25, size: 'medium' },
  ];

  // Right side icons (5 icons) - with varying sizes
  const rightIcons = [
    { id: 'right1', img: int3, top: 5, left: 72, size: 'medium' },
    { id: 'right2', img: int4, top: 10, left: 88, size: 'large' },
    { id: 'right3', img: int9, top: 28, left: 80, size: 'small' },
    { id: 'right4', img: int5, top: 68, left: 75, size: 'small' },
    { id: 'right5', img: int10, top: 60, left: 92, size: 'large' },
  ];

  const allIcons = [...leftIcons, ...rightIcons];

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    // Center position
    const centerX = width / 2;
    const centerY = height / 2;
    const centerRadius = 100;

    // Create paths for each icon
    allIcons.forEach((icon, index) => {
      const startX = (icon.left / 100) * width;
      const startY = (icon.top / 100) * height;

      // Determine if icon is on left or right side
      const isLeft = icon.left < 50;
      
      // Calculate unique Y position for each path based on icon's vertical position
      // Sort icons by their Y position to create proper stacking
      const sideIcons = isLeft ? leftIcons : rightIcons;
      const iconIndexInSide = sideIcons.findIndex(i => i.id === icon.id);
      
      // Create staggered horizontal lines - top icons get bottom positions, bottom icons get top positions
      const pathOffset = (iconIndexInSide - (sideIcons.length / 2)) * 25; // 25px spacing between paths
      const finalY = centerY + pathOffset;
      
      // Calculate end point - perfectly horizontal line touching the circle
      // Use Pythagorean theorem to find X where the circle intersects at finalY
      const yDiff = finalY - centerY;
      const xOffset = Math.sqrt(Math.max(0, centerRadius * centerRadius - yDiff * yDiff));
      const endX = isLeft ? centerX - xOffset : centerX + xOffset;
      const endY = finalY;

      // Create path with smooth rounded corners using arc commands
      // Each icon gets a unique horizontal position for vertical segment
      let verticalX;
      
      if (isLeft) {
        // For left icons, create staggered vertical positions
        verticalX = startX + (centerX - startX) * 0.35;
      } else {
        // For right icons, create staggered vertical positions
        verticalX = startX - (startX - centerX) * 0.35;
      }
      
      const cornerRadius = 15; // Radius for smooth corners
      
      // Determine direction for corner arcs
      const horizontalDirection = isLeft ? 1 : -1;
      const verticalDirection = startY < finalY ? 1 : -1;
      
      // Build path with smooth corners:
      // Start -> horizontal -> smooth corner -> vertical -> smooth corner -> horizontal -> end
      let pathData = `M ${startX} ${startY}`;
      
      // Horizontal segment to corner
      pathData += ` L ${verticalX - (cornerRadius * horizontalDirection)} ${startY}`;
      
      // Smooth corner (arc)
      pathData += ` Q ${verticalX} ${startY} ${verticalX} ${startY + (cornerRadius * verticalDirection)}`;
      
      // Vertical segment
      pathData += ` L ${verticalX} ${finalY - (cornerRadius * verticalDirection)}`;
      
      // Smooth corner (arc)
      pathData += ` Q ${verticalX} ${finalY} ${verticalX + (cornerRadius * horizontalDirection)} ${finalY}`;
      
      // Final horizontal segment to center (perfectly horizontal at unique Y level)
      pathData += ` L ${endX} ${endY}`;

      // Create path element
      const pathElement = svg.append('path')
        .attr('id', `path-${icon.id}`)
        .attr('d', pathData)
        .attr('fill', 'none')
        .attr('stroke', 'none');

      const pathLength = pathElement.node().getTotalLength();

      // Create static dots along the path
      const numDots = Math.floor(pathLength / 8);
      
      for (let i = 0; i < numDots; i++) {
        const point = pathElement.node().getPointAtLength((i / numDots) * pathLength);
        const dotSize = 1.5 + Math.random() * 0.3;
        
        svg.append('circle')
          .attr('cx', point.x)
          .attr('cy', point.y)
          .attr('r', 0)
          .attr('fill', '#C7D2FE')
          .attr('opacity', 0)
          .transition()
          .delay(index * 50 + i * 8)
          .duration(600)
          .attr('r', dotSize)
          .attr('opacity', 0.4 + Math.random() * 0.2);
      }

      // Array of 4 different colors for the 4 glowing dots in each path
      const dotColors = ['#8B5CF6', '#EC4899', '#F59E0B', '#3B82F6'];
      
      // Determine if this is an odd or even icon
      const isOdd = index % 2 === 0;
      const groupDelay = isOdd ? 0 : 3;

      // Create animated glowing dots
      for (let dotIndex = 0; dotIndex < 4; dotIndex++) {
        const glowDot = svg.append('circle')
          .attr('class', `glow-dot-${icon.id}-${dotIndex}`)
          .attr('r', 2)
          .attr('fill', dotColors[dotIndex])
          .attr('opacity', 0)
          .style('filter', 'url(#glow)');

        // Animate dot along the path
        gsap.to(glowDot.node(), {
          duration: 8,
          repeat: -1,
          ease: "none",
          delay: groupDelay + dotIndex * 0.1,
          motionPath: {
            path: `#path-${icon.id}`,
            align: `#path-${icon.id}`,
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
          },
          onStart: function() {
            gsap.to(glowDot.node(), { opacity: 0.3, duration: 0.3 });
          },
          onComplete: function() {
            gsap.to(glowDot.node(), { opacity: 0, duration: 0.3 });
          }
        });
      }
    });

    // Add glow filter definition
    const defs = svg.append('defs');
    const filter = defs.append('filter')
      .attr('id', 'glow')
      .attr('x', '-50%')
      .attr('y', '-50%')
      .attr('width', '200%')
      .attr('height', '200%');
    
    filter.append('feGaussianBlur')
      .attr('stdDeviation', '3')
      .attr('result', 'coloredBlur');
    
    const feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

  }, []);

  const AnimatedIcon = ({ icon, index, isLeft }) => {
    const props = useSpring({
      from: { opacity: 0, transform: 'scale(0.5)' },
      to: { opacity: 1, transform: 'scale(1)' },
      delay: index * 100,
      config: { tension: 200, friction: 20 }
    });

    // Define size variants (45px to 65px range)
    const sizeClasses = {
      small: { container: 'w-[45px] h-[45px]', icon: 'w-[45px] h-[45px]' },
      medium: { container: 'w-[55px] h-[55px]', icon: 'w-[55px] h-[55px]' },
      large: { container: 'w-[65px] h-[65px]', icon: 'w-[65px] h-[65px]' }
    };

    const sizes = sizeClasses[icon.size] || sizeClasses.medium;

    return (
      <animated.div
        style={{
          ...props,
          position: 'absolute',
          top: `${icon.top}%`,
          left: `${icon.left}%`,
          transform: 'translate(-50%, -50%)',
          zIndex: 20
        }}
      >
        <div className="relative">
          <div className={`${sizes.container}`}>
            <img
              src={icon.img}
              alt={`Integration ${index + 1}`}
              className={`${sizes.icon} object-contain`}
            />
          </div>
        </div>
      </animated.div>
    );
  };

  return (
    <div className="flex items-center justify-center p-8 mt-20 min-h-screen">
      <div className="relative w-full max-w-6xl bg-white rounded-3xl border border-gray-200 shadow-lg p-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-gray-900 leading-tight">
            Integrations. Works Where You Work
          </h1>
        </div>

        {/* Central container with icons and connections */}
        <div ref={containerRef} className="relative w-full h-[500px] mx-auto">
          {/* SVG for curved dotted lines and animated dots */}
          <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 5 }}
          />

          {/* Left side icons */}
          {leftIcons.map((icon, index) => (
            <AnimatedIcon key={icon.id} icon={icon} index={index} isLeft={true} />
          ))}

          {/* Right side icons */}
          {rightIcons.map((icon, index) => (
            <AnimatedIcon key={icon.id} icon={icon} index={leftIcons.length + index} isLeft={false} />
          ))}

          {/* Central image with outer ring */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              {/* Inner sphere */}
              <div className="w-51 h-51">
                <img 
                  src={midicon} 
                  alt="Central Hub" 
                  className="w-51 h-51 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;