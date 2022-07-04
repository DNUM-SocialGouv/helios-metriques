import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formateLaDate } from './utils';

export type Sprint = Readonly<{
  nom: string;
  dateDeDébut: string;
  dateDeFin: string;
  id: number;
}>;

export const ListeDesSprints = () => {
  const [sprints, setSprints] = useState<Sprint[]>([]);

  async function récupèreLesSprints() {
    try {
      // return await (await fetch('https://jira.sg.social.gouv.fr/rest/agile/1.0/board/263/sprint')).json();
      const donnéesDuTableauJira = {
        maxResults: 50,
        startAt: 0,
        isLast: true,
        values: [
          {
            id: 443,
            self: 'https://jira.sg.social.gouv.fr/rest/agile/1.0/sprint/443',
            state: 'closed',
            name: 'Helios Sprint 1',
            startDate: '2022-04-11T12:51:35.290+02:00',
            endDate: '2022-04-25T12:51:00.000+02:00',
            completeDate: '2022-04-28T12:51:46.946+02:00',
            originBoardId: 263,
            goal: '',
          },
          {
            id: 444,
            self: 'https://jira.sg.social.gouv.fr/rest/agile/1.0/sprint/444',
            state: 'closed',
            name: 'Helios Sprint 1',
            startDate: '2022-04-11T13:00:31.988+02:00',
            endDate: '2022-04-25T13:00:00.000+02:00',
            completeDate: '2022-04-28T15:36:48.973+02:00',
            originBoardId: 263,
            goal: '',
          },
          {
            id: 445,
            self: 'https://jira.sg.social.gouv.fr/rest/agile/1.0/sprint/445',
            state: 'closed',
            name: 'Helios Sprint 2',
            startDate: '2022-04-25T15:37:28.492+02:00',
            endDate: '2022-05-09T15:37:00.000+02:00',
            completeDate: '2022-05-06T14:28:39.968+02:00',
            originBoardId: 263,
            goal: '',
          },
          {
            id: 446,
            self: 'https://jira.sg.social.gouv.fr/rest/agile/1.0/sprint/446',
            state: 'closed',
            name: 'Helios Sprint 3',
            startDate: '2022-05-06T14:29:18.398+02:00',
            endDate: '2022-05-20T14:29:00.000+02:00',
            completeDate: '2022-05-20T14:57:08.997+02:00',
            originBoardId: 263,
            goal: '',
          },
          {
            id: 467,
            self: 'https://jira.sg.social.gouv.fr/rest/agile/1.0/sprint/467',
            state: 'closed',
            name: 'Helios Sprint 4',
            startDate: '2022-05-20T14:57:36.653+02:00',
            endDate: '2022-06-03T14:57:00.000+02:00',
            completeDate: '2022-06-03T17:06:54.503+02:00',
            originBoardId: 271,
            goal: '',
          },
          {
            id: 468,
            self: 'https://jira.sg.social.gouv.fr/rest/agile/1.0/sprint/468',
            state: 'closed',
            name: 'Helios Sprint 5',
            startDate: '2022-06-03T17:07:12.644+02:00',
            endDate: '2022-06-17T17:07:00.000+02:00',
            completeDate: '2022-06-17T16:10:29.553+02:00',
            originBoardId: 271,
            goal: '',
          },
          {
            id: 469,
            self: 'https://jira.sg.social.gouv.fr/rest/agile/1.0/sprint/469',
            state: 'active',
            name: 'Helios Sprint 6',
            startDate: '2022-06-17T16:10:43.178+02:00',
            endDate: '2022-07-01T16:10:00.000+02:00',
            originBoardId: 271,
            goal: '',
          },
        ],
      };
      setSprints(
        donnéesDuTableauJira.values.map((sprint): Sprint => {
          return {
            nom: sprint.name,
            dateDeDébut: formateLaDate(new Date(sprint.startDate)),
            dateDeFin: formateLaDate(new Date(sprint.endDate)),
            id: sprint.id,
          };
        }),
      );
    } catch (error) {}
  }

  useEffect(() => {
    récupèreLesSprints();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Date de début</th>
          <th>Date de fin</th>
          <th>Lien</th>
        </tr>
      </thead>
      <tbody>
        {sprints.map((sprint) => (
          <tr key={sprint.id}>
            <td>{sprint.nom}</td>
            <td>{sprint.dateDeDébut}</td>
            <td>{sprint.dateDeFin}</td>
            <td>
              <Link to={`/sprint/${sprint.id}`}>voir le sprint #{sprint.id}</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
