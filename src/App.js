import ShowData from './components/ShowData';
import AddData from './components/AddData';

import { useEffect } from 'react';
import { getDummyData } from './store';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const dummyData = useSelector(state => state.dummyDataReducer)

  useEffect(() => {
    dispatch(getDummyData());
  }, [dispatch]);

  return (
    <>
      {dummyData.loader && "...Loading"}
      {!dummyData.loader && "Loaded Successfully"}
      {" - "}
      {dummyData.data.title}
      <AddData />
      <ShowData />
    </>
  );
}

export default App;
