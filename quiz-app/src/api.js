import axios from 'axios';

const api = axios.create({
  baseURL: '(https://opentdb.com/api.php?amount=10&category=19&difficulty=easy&type=multiple)',
});

export const fetchQuestions = async () => {
  const response = await api.get('api.php', {
    params: {
      amount: 10,
      category: 9,
      difficulty: 'easy',
      type: 'multiple',
    },
  });
  return response.data.results;
};
