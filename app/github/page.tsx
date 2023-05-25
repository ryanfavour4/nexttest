"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useGetGithubRepo } from "../controller/getGithubRepo";
import Table from "react-bootstrap/Table";
type githubType<T> = { [Key in keyof T]: T[Key] }[];

const Githubpage = async () => {
  const { gitHubRepo } = useGetGithubRepo();
  const github: githubType<unknown> = await gitHubRepo;
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Visibility</th>
          <th>Created at</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {github?.length &&
          github.map((repo: any, index: number) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{repo.name}</td>
                <td>{repo.visibility}</td>
                <td>{repo.created_at.split("T")[0]}</td>
                <td>
                  <Link href={repo.html_url}> 🔗</Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default Githubpage;
