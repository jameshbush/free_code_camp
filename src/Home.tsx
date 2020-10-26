import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { certificationsData } from "./certificationsData";

export interface IHomeProps {}
interface IRoutable {
  path: string;
  component: any;
  // component?: (props: any, state: any) => JSX.Element;
}
export interface ICertificationProps extends IRoutable {
  name: string;
  description: string;
  projects: IProjectProps[];
}
export interface IProjectProps extends IRoutable {
  name: string;
  isDisabled?: true;
}

const Project = ({ path, name, isDisabled }: IProjectProps): JSX.Element | null =>
  isDisabled ? null : (
    <li>
      <Link to={path}>{name}</Link>
    </li>
  );

const Certification = (props: ICertificationProps): JSX.Element => (
  <div>
    <h2>{props.name}</h2>
    <p>{props.description}</p>
    <ul>
      {props.projects.map((project) => (
        <Project
          path={project.path}
          name={project.name}
          component={project.component}
          key={project.path}
          isDisabled={project.isDisabled}
        />
      ))}
    </ul>
  </div>
);

const Home = (props: IHomeProps): JSX.Element => (
  <Container>
    <h1 className="text-center">Home Page</h1>
    {certificationsData.map((certification) => (
      <Certification
        path={certification.path}
        name={certification.name}
        component={certification.component}
        description={certification.description}
        projects={certification.projects}
        key={certification.path}
      />
    ))}
  </Container>
);

export { Home, Certification, Project };
