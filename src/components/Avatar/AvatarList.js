import React, { useContext, useEffect, useState } from 'react';
import Avatar from './Avatar';
import AvatarContext from '../../context/AvatarContext';
import Loading from '../common/Loading';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

export default function AvatarList() {
  const avatar_context = useContext(AvatarContext);
  const [currentPage, setCurrentPage] = useState(1);
  
  const { data, total_pages } = avatar_context.avatars;
  const [currentSelectedAvatar, setcurrentSelectedAvatar] = useState(data);

  useEffect(() => {
    avatar_context.getAvatars(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(()=>{
    setcurrentSelectedAvatar(data);
  },[data]);

  const userNameAndId = [];
  data?.forEach(element => {
    userNameAndId.push({"id":element.id,"name":element.first_name + " " + element.last_name,"avatar":element.avatar});
  });

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    avatar_context.getAvatars(pageNumber);
  };

  const handleOnSearch = (string, results) => {
    /* console.log("string : ", string) */
    console.log("results : ", results)
    
    if(string.length > 0){
      setcurrentSelectedAvatar(data.filter((item) => {
        return results.some((childItem) => childItem.id === item.id);
      }));
    }
    else{
      setcurrentSelectedAvatar(data);
    }
  }

  const handleOnSelect = (item) => {
    console.log("item : ",item);
    setcurrentSelectedAvatar(currentSelectedAvatar.filter(avatar => avatar.id === item.id));
  }

  const formatResult = (item) => {
    return (
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
    )
  }

  if (avatar_context.isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container">
       <div className='row justify-content-center'>
       <div className='m-4' style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={userNameAndId}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onClear={()=> {setcurrentSelectedAvatar(data)}}
            autoFocus
            formatResult={formatResult}
            styling={{ zIndex : 1 }}
          />
        </div>
       </div>
        <div className="row">
          {currentSelectedAvatar?.map((item) => {
            return (
              <div className="col-md-3 p-4" key={item.id}>
                <Avatar avatar={item} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="pagination justify-content-center mt-5 mb-5">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn m-1 p-2"
        >
          Previous
        </button>
        {Array.from({ length: total_pages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`btn m-1 p-2 ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === total_pages}
          className="btn m-1 p-2"
        >
          Next
        </button>
      </div>
    </>
  );
}