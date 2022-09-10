import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomerModalEditForm from "../../partials/customer-content/CustomerModalEditForm";
import CustomerTableContent, { StatusPill } from "../../partials/customer-content/CustomerTableContent";
import { retrieveCustomers, deleteCustomer } from "../../store/actions/customer-action";
import { ROLES_MANAGEMENTS, userData } from "../../utils/constants";

function MasterCustomer() {
  const customers = useSelector((state) => state.customers.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveCustomers());
  }, []);

  const removeCustomers = (id) => {
    if (window.confirm("Are you sure you want to remove?")) {
      dispatch(deleteCustomer(id));
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Customer",
        accessor: "customer",
      },
      {
        Header: "PIC",
        accessor: "pic",
      },
      {
        Header: "Contact",
        accessor: "contact",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Sales",
        accessor: "salesUser.fullName",
      },
      {
        Header: "Coordinate",
        accessor: "coordinate",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
      {
        Header: "Action",
        // accessor: 'action',
        Cell: (customers) => (
          <div className="flex justify-start">
            {ROLES_MANAGEMENTS["update_customer"].allowedRoles.includes(
              userData?.user?.role
            ) && <CustomerModalEditForm id={customers.row.original.id} />}
            {ROLES_MANAGEMENTS["delete_customer"].allowedRoles.includes(
              userData?.user?.role
            ) && (
              <svg
                onClick={() => removeCustomers(customers.row.original.id)}
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-red-400 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            )}
          </div>
        ),
      },
    ],
    []
  );

  return <CustomerTableContent columns={columns} data={customers} />
}

export default MasterCustomer;
