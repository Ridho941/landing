import React from 'react';
import { Puff } from 'react-loader-spinner'


const Loading = () => {
    return (
        <div className='loader justify-center'>
            <Puff
                height="80"
                width="80"
                radius={1}
                color="#ffffff"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}
export default Loading;