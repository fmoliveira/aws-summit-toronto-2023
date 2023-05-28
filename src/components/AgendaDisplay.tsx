import getSummitAgenda from "@/services/getSummitAgenda";

const agenda = getSummitAgenda();

export default function AgendaDisplay() {
  return (
    <div>
      <h1 className="text-3xl font-bold py-3">AWS Summit Toronto 2023</h1>
      <p>
        <a
          href="https://aws.amazon.com/events/summits/toronto/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-cyan-200 hover:text-indigo-400 hover:underline"
        >
          https://aws.amazon.com/events/summits/toronto/
        </a>
      </p>
      {agenda.map((daySchedule) => (
        <div key={daySchedule.day} className="my-4">
          <h2 className="text-2xl font-bold py-2">{daySchedule.day}</h2>
          {daySchedule.interval.map((interval) => (
            <div key={interval.duration} className="mb-8">
              <h3 className="text-xl font-bold py-1 text-amber-400">
                {interval.duration}
              </h3>
              <ul>
                {interval.sessions.map((session) => (
                  <li
                    key={session.headline}
                    className="my-4 ml-4 pl-4 py-1 flex flex-col gap-2 border-l-2 border-indigo-300"
                  >
                    <p className="font-bold text-cyan-400">
                      {session.category} &lt;&gt; {session.headline}
                    </p>
                    {!!session.subHeadline && (
                      <p>
                        <span className="text-slate-200 font-semibold">
                          Hosts:
                        </span>{" "}
                        {session.subHeadline}
                      </p>
                    )}
                    {!!session.expertise && (
                      <p>
                        <span className="text-slate-200 font-semibold">
                          Expertise:
                        </span>{" "}
                        {session.expertise}
                        <br />
                      </p>
                    )}
                    <p className="text-slate-300 leading-7">
                      {session.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
