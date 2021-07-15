import { RepositoryItem } from "../RepositoryItem";

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={
                    {
                        name: 'unform',
                        description: 'Forms in React',
                        link: 'https://github.com/unform/unform'
                    }
                } />
                <RepositoryItem repository={
                    {
                        name: 'unform',
                        description: 'Forms in React',
                        link: 'https://github.com/unform/unform'
                    }
                } />
                <RepositoryItem repository={
                    {
                        name: 'unform',
                        description: 'Forms in React',
                        link: 'https://github.com/unform/unform'
                    }
                } />
            </ul>
        </section>
    );
}