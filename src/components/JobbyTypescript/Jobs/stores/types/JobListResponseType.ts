import { JoblistItemResponseType } from "./jobListItemResponseType";

export type JoblistResponseType = {
  jobs: JoblistItemResponseType[];
  total: number;
};
