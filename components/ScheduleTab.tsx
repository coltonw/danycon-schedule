import Link from 'next/link';
import { FiCalendar } from 'react-icons/fi';

interface ScheduleTabProps {
  id: string;
  date: string;
  title: string;
}

const ScheduleTab = ({ id, date, title }: ScheduleTabProps) => {
  return (
    (<Link
      href={{ pathname: '/', query: { tab: id } }}
      className="is-flex is-flex-direction-column">

      <span className="icon is-medium mx-0">
        <FiCalendar size="1.5em" />
      </span>
      <span className="is-size-7">{date}</span>
      <span>{title}</span>

    </Link>)
  );
};

export default ScheduleTab;
