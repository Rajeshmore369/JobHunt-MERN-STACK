import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Job from "./Job";

const randomJobs = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12];

const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-lg my-10">
          Search Results( {randomJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {randomJobs.map(() => {
            return <Job key={""} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Browse;
