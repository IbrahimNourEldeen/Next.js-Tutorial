'use client'
export default function ({error}:{error:Error}){
    return <div>{error.message}</div>
};
