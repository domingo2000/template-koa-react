import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config/config';

const useFetchData = (endpoint: string) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = `${config.API_URL}/${endpoint}`;
      try {
        const { data: response } = await axios.get(url);
        setData(response);
      } catch (error: any) {
        switch (error.response.status) {
          case 401:
            navigate('/forbidden');
            break;
          case 403:
            console.log('Forbidden');
            break;
          default:
            console.log(`Error fetching the data: ${error.response.status} ${error.response.statusText} ${url}`);
        }
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetchData;
