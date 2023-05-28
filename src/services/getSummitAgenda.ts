import { chain, pick } from "lodash";
import { stripHtml } from "string-strip-html";

import summitAgenda from "@/data/aws-summit-toronto-2023.json";

export default function getSummitAgenda() {
  return chain(summitAgenda.items)
    .map((row) => row.item.additionalFields)
    .map((item) =>
      pick(item, [
        // grouping
        "eventDate",
        "startDate",
        "duration",

        // display
        "headline",
        "subHeadline",
        "description",
        "expertise",

        // filtering
        "category",
        "contentType",
      ])
    )
    .map((item) => ({
      ...item,
      description: stripHtml(item.description).result,
    }))
    .map((item) => ({
      ...item,
      // fix formatting for grouping and sorting
      duration: (item.duration.match(/\d+:\d+ \w+/g) ?? []).join(" - "),
    }))
    .map((item) => ({
      ...item,
      startTime: item.duration?.split("-")[0],
    }))
    .map((item) => ({
      ...item,
      startDateTime: new Date([item.startDate, item.startTime].join(" ")),
    }))
    .sortBy("startDateTime")
    .groupBy("eventDate")
    .map((items, day) => ({
      day,
      interval: chain(items)
        .groupBy("duration")
        .map((sessions, duration) => ({
          duration,
          sessions: chain(sessions).sortBy("category", "headline").value(),
        }))
        .value(),
    }))
    .value();
}
