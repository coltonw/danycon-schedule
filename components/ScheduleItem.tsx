import { ReactNode, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface ScheduleItemProps {
  time: string;
  title: string;
  icon: ReactNode;
  iconColor?: string;
  children?: ReactNode;
}

const ScheduleItem = ({
  time,
  title,
  icon,
  iconColor,
  children,
}: ScheduleItemProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`card mb-2 ${children ? 'is-clickable' : ''}`}
      onClick={() => setOpen(!open)}
    >
      <div className="card-content">
        <div className="content">
          <div className="is-flex is-align-items-center">
            <div className={`icon is-large ${iconColor || ''}`}>{icon}</div>
            <div>
              <div className="is-size-7">{time}</div>
              <div>{title}</div>
            </div>
            <div className="is-flex-grow-1"></div>
            {children && (
              <div className="icon is-medium">
                {open ? <FiChevronUp /> : <FiChevronDown />}
              </div>
            )}
          </div>

          {open && children && <div className="content mt-2">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default ScheduleItem;
