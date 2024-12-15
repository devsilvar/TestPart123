import { useState, useEffect } from 'react';
import { base_url } from '../../utils/baseurl';
import axios from 'axios';
import { PropsTodo } from '../../utils/types';

/**
 * FetchData Component
 *
 * This component fetches data from an external API and
 * renders the data in an ordered list.
 *
 * The component uses the useState hook to store the
 * data fetched from the API and the loading state of
 * the component.
 *
 * The useEffect hook is used to fetch the data from the
 * API when the component mounts. The fetching is done
 * inside an async function called fetchTodo.
 *
 * The fetchTodo function sends a GET request to the
 * API using the axios library. When the response is
 * received, the data is stored in the state using the
 * setTodos function. The loading state is also set to
 * false using the setloading function.
 *
 * If there is an error during the fetching process, the
 * error is logged to the console.
 *
 * The component renders a heading while the data is
 * being fetched. When the data is received, it renders
 * an ordered list with the titles and completed status
 * of the first 10 items in the data.
 */
const FetchData = () => {
  const [loading, setloading] = useState<boolean>(true);
  const [Todos, setTodos] = useState<PropsTodo[] | []>([]);

  useEffect(() => {
    /**
     * Fetches data from the API and updates the state
     */
    const fetchTodo = async () => {
      try {
        /**
         * Sends a GET request to the API using axios
         */
        const response = await axios.get(base_url);
        /**
         * Updates the state with the received data
         */
        setTodos(response.data);
        console.log(response.data);
        /**
         * Sets the loading state to false
         */
        setloading(false);
      } catch (error) {
        /**
         * Logs the error to the console if there is an
         * error during the fetching process
         */
        console.log(error);
      } finally {
        /**
         * Sets the loading state to false even if there
         * is an error
         */
        setloading(false);
      }
    };

    /**
     * Calls the fetchTodo function when the component
     * mounts
     */
    fetchTodo();
  }, []);

  /**
   * Renders a heading while the data is being fetched
   */
  if (loading) return <h1>Loading ....</h1>;

  /**
   * Renders an ordered list with the titles and completed
   * status of the first 10 items in the data
   */
  return (
    <div>
      <ol>
        {!loading &&
          Todos.slice(0, 10).map((todo, index) => {
            return (
              <li key={index} className='p-2'>
                Title : {todo.title}
                Status: {String(todo.completed)}
              </li>
            );
          })}
      </ol>
    </div>
  );
};


export default FetchData;
