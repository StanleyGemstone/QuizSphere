import axios from 'axios';

const api = axios.create({
  baseURL: '(https://opentdb.com/api.php?amount=20&category=19&difficulty=medium)',
});

export const fetchQuestions = async () => {
  const response = await api.get('api.php', {
    params: {
      amount: 20,
      category: 19,
      difficulty: 'medium',
      type: 'multiple',
    },
  });
  return response.data.results;
};
