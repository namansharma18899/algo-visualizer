import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { Nav, NavDropdown } from 'react-bootstrap';
import { FaHome, FaShoppingBag, FaBars, FaUser } from 'react-icons/fa';

const algoList = ['Dijkstra', 'DurstenfeldShuffle']

const Sidebar = () => {
  return (
    <div>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Algo Visualizer
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
              <CDBSidebarMenuItem icon="user">
                <a href="https://www.linkedin.com/in/naman-sharma-a10722192/">Profile page</a>
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="chart-line">
                <a href="https://www.algorithm-archive.org/">Documentation</a>
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="exclamation-circle">
                <a href="https://github.com/namansharma18899">About the Author</a>
              </CDBSidebarMenuItem>
              {/* TODO: fix the dropdown  */}
              <Dropdown style={{marginLeft:"30px"}}>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
                  Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu style={{backgroundColor:"grey"}} variant="dark">
                {algoList.map((val,index) =>(
                  <Dropdown.Item variant="dark" href={"/"+val}>{val}</Dropdown.Item>
                )
                )}
                </Dropdown.Menu>
              </Dropdown>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            v2.0
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};
export default Sidebar;
