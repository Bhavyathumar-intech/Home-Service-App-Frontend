import { useDispatch, useSelector } from "react-redux";
import {getAdminProduct} from '../../action/serviceActions'
import { useEffect } from "react";
import ServiceCard from "../../Cards/ServiceCard";

function ViewService() {
  const dispatch = useDispatch();
  const { services, error } = useSelector((state) => state.services);

  useEffect(() => {
    //dispatch(getAdminProduct()); 
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <ServiceCard services={services} error={error} />
    </div>
  );
}

export default ViewService;
