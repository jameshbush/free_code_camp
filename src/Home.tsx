import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { certificationsData } from "./certifications";

export interface IHomeProps {}
interface IRoutable {
  path: string;
  component?: (props: any, state: any) => JSX.Element;
}
export interface ICertificationProps extends IRoutable {
  name: string;
  description: string;
  projects: IProjectProps[];
}
export interface IProjectProps extends IRoutable {
  name: string;
}

const Project = ({ path, name }: IProjectProps): JSX.Element => (
  <li>
    <Link to={path}>{name}</Link>
  </li>
);

const Certification = (props: ICertificationProps): JSX.Element => (
  <div>
    <h2>{props.name}</h2>
    <p>{props.description}</p>
    <ul>{props.projects.map((project) => Project(project))}</ul>
  </div>
);

const Home = (props: IHomeProps): JSX.Element => (
  <Container>
    <h1 className="text-center">Home Page</h1>
    {certificationsData.map((certification) => Certification(certification))}
  </Container>
);

export { Home, Certification, Project };
