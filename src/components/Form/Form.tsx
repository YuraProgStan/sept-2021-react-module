import React, {ChangeEvent, FC} from 'react';
import {IGenre} from "../../interfaces";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks/redux";
import {getAllMovies, getAllMoviesWithGenre, setCurrenGenres, setPages} from "../../store";
import {useNavigate} from "react-router-dom";

const Form: FC<{ genres: IGenre[] }> = ({genres}) => {
    const dispatch = useAppDispatch()
const navigate =useNavigate();

const getValue = (e:React.ChangeEvent<HTMLSelectElement>):void => {
    const valueOption = e.target.value;
    if(valueOption!=='0'){
        dispatch(setCurrenGenres({genre:valueOption}))
    }
    else {
        dispatch(setCurrenGenres({genre:''}))
    }
    dispatch(setPages({page:'1'}))
    navigate('/movies/page/1');
}
    return (
        <div>
            <form>
                <select name = {'genre'} placeholder={'genre'} onChange={getValue}>
                    <option value="0">All Genres</option>
                    {genres && genres.map(item => <option  key={item.id} value={item.id}>{item.name}</option>)}
                </select>
            </form>

        </div>
    );
};

export {Form};