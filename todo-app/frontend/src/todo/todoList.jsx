import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import IconButton from '../template/iconButton';
import {markAsDone, markAsPending,del} from './todoActions';

const TodoList = props => {

    const renderRows =() =>{
        const list = props.list || [];
        return list.map(
            todo=>(
                //Explicado em 5/56 - 07:39min
                <tr key={todo._id}>
                    <td className={todo.done? 'markedAsDone':''}>
                        {todo.description}
                    </td>
                    <td>
                        <IconButton 
                            style="success" 
                            icon="check"
                            onClick={()=>props.markAsDone(todo)}
                            hide={todo.done}>
                        </IconButton>
                        <IconButton 
                            style="warning" 
                            icon="undo" 
                            onClick={()=>props.markAsPending(todo)}
                            hide={!todo.done}>
                        </IconButton>
                        <IconButton 
                            style='danger' 
                            icon='trash-o'
                            onClick={()=> props.del(todo)}
                            hide={!todo.done}>
                            </IconButton>
                    </td>
                </tr>
            )
        );
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );

};

const mapStateToProps = state => ({list: state.todo.list});
const mapDispatchToProps = dispatch => 
    bindActionCreators({markAsDone,markAsPending,del},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);