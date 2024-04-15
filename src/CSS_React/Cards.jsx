const Cards =() =>
{
    console.log(props);
    const { Name, Role, Company } = props;
    return(
        <main className="cards">
            <h1 className="details">Name</h1>
            <h2 className="details">Role</h2>
            <h3 className="details">Company</h3>
        </main>
    )
}