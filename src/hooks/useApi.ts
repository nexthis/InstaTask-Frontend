import {useState, useEffect} from 'react';


type ArgsType<T> = T extends (...args: infer U) => any ? U : never;
type ThenArg<T> = T extends PromiseLike<infer U> ? U : T


type ReturnArg <T> = [
  ///@ts-ignore
  ThenArg<ReturnType<T>>, 
  {isLoading: boolean, isError:boolean }, 
  {fetchData: (props?:ArgsType<T>) => void}
]


export const useApi  = <T extends Function> (api: T, ...props:ArgsType<T>): ReturnArg<T>  => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);


    const fetchData = async (prams = props) => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await api(...prams)
        setData(result);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
 
      setIsLoading(false)
    };

    useEffect(() => {
      fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    ///@ts-ignore
    return [ data, {isLoading, isError }, {fetchData}];
};