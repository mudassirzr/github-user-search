import SearchForm from "components/searchForm";

function Home() {
  return (
    <div>
      <h1 className={'homeHeaderText'}>Lookup Github User Details</h1>
      <p className={'homeHeaderSubText'}>type a github username to check full details of the user!</p>
      <SearchForm />
    </div>
  );
}

export default Home;
