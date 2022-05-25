import "./List.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import DataTable from "../../Components/DataTable/DataTable";

const List = ({ columns, rows }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable columns={columns} rows={rows} />
      </div>
    </div>
  );
};

export default List;
