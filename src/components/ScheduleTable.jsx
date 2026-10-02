import './ScheduleTable.css';

export default function ScheduleTable({ title, rows }) {
  return (
    <div className="schedule">
      <h3>{title}</h3>
      <table>
        <tbody>
          {rows.map((r) => (
            <tr key={r.day}>
              <td className="schedule__day">{r.day}</td>
              <td className="schedule__time">{r.time}</td>
              <td className="schedule__note">{r.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
