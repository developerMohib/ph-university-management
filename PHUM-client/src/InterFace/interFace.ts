import { ReactNode } from "react";

export interface IRoute {
  path: string;
  element: ReactNode;
}
export interface ISidebar {
  key: string;
  label: ReactNode;
  children?: ISidebar[];
}
export type TPathItems = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TPathItems[];
};
