import getSummitAgenda from "@/services/getSummitAgenda";

const agenda = getSummitAgenda();

export default function AgendaDisplay() {
  return (
    <div>
      <h1>AWS Summit Toronto 2023</h1>
      <p>
        <a
          href="https://aws.amazon.com/events/summits/toronto/"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://aws.amazon.com/events/summits/toronto/
        </a>
      </p>
      {agenda.map((daySchedule) => (
        <div key={daySchedule.day}>
          <h2>{daySchedule.day}</h2>
          <div>
            {daySchedule.interval.map((interval) => (
              <div key={interval.duration}>
                <h3>{interval.duration}</h3>
                <ul>
                  {interval.sessions.map((session) => (
                    <li key={session.headline}>
                      <strong>
                        {session.category} &lt;&gt; {session.headline}
                      </strong>
                      <br />
                      <span>
                        <strong>Hosts:</strong> {session.subHeadline}
                      </span>
                      <br />
                      <span>
                        <strong>Expertise:</strong> {session.expertise}
                      </span>
                      <br />
                      <br />
                      <div>{session.description}</div>
                      <br />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
