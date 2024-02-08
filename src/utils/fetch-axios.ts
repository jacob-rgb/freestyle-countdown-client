/* eslint-disable @typescript-eslint/no-explicit-any */
import { EFetchMethods } from "../domain/enums/EFetchMethods";

const baseUrl = import.meta.env.REACT_APP_API_URL;
const defaultReqType = EFetchMethods.GET;

const fetchSinToken = ( endPoint: string, data: any, method: EFetchMethods = defaultReqType ) => {
    const url =`${baseUrl}/${endPoint}`;

    if( method === EFetchMethods.GET) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        })
    }
}

const fetchConToken = ( endPoint: string, data: any, method: EFetchMethods = defaultReqType) => {
    const url =`${baseUrl}/${endPoint}`;
    const token = localStorage.getItem('token') || '';

    if( method === EFetchMethods.GET) {
        return fetch( url, {
            method,
            headers: {
                'x-token': token
            }
        } );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
        })
    }
}

export {
    fetchSinToken,
    fetchConToken
}