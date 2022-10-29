import './Quiz.css';
import React from 'react';
import questionsData from "./questions.js"

export default function Quiz(props) {
	const [questionNumber, setQuestionNumber] = React.useState(0)
	const [showScore, setShowScore] = React.useState(false)
	const [categoriesScore, setCategoriesScore] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
	const [categoriesResult, setCategoriesResult] = React.useState(["очень хорошо", "очень хорошо", "очень хорошо", "очень хорошо", "очень хорошо", "очень хорошо", "очень хорошо", "очень хорошо", "очень хорошо", "очень хорошо"])
	const categoriesNames = ["Переваривание, усвоение пищи", "Желудочно-кишечный тракт", "Сердечно-сосудистая система", "Нервная система", "Иммунная система", "Дыхательная система", "Мочеполовая система", "Эндокринная система", "Опорно-двигательная система", "Кожа"]
	function nextQuestion(isTrue, categories) {
		for (let i = 0; i < categoriesScore.length; i++) {
			if (categories.indexOf(i) !== -1) {
				if (isTrue) {
					const newCategoriesScore = categoriesScore
					newCategoriesScore[i] = newCategoriesScore[i] + 1
					setCategoriesScore(newCategoriesScore)
					console.log(categoriesScore)
					const newCategoriesResult = categoriesResult
					if (newCategoriesScore[i] > 2 && newCategoriesScore[i] < 5) {
						newCategoriesResult[i] = "хорошо"
						setCategoriesResult(newCategoriesResult)
					} else if (newCategoriesScore[i] > 4 && newCategoriesScore[i] < 10) {
						newCategoriesResult[i] = "зона риска"
						setCategoriesResult(newCategoriesResult)
					} else if (newCategoriesScore[i] > 10) {
						newCategoriesResult[i] = "неудовлетворительно"
						setCategoriesResult(newCategoriesResult)
					}
					console.log(categoriesResult)
				}
			}
		}
		if (questionNumber < questionsData.questions.length - 1) {
			setQuestionNumber(questionNumber + 1)
		} else {
			setShowScore(true)
		}
	}

	return (
		<main className={'app ' + (props.theme ? "dark" : "")}>
			{showScore ? (
				<div className='score-section'>
					<p>Ваши результаты:</p>
					{categoriesNames.map(name => (
						<div className='category'>
							<p className='categoryName'>
								{name}
							</p>
							<p className={"categoryResult " +
								(categoriesResult[categoriesNames.indexOf(name)] === "хорошо" ? "good" : "") +
								(categoriesResult[categoriesNames.indexOf(name)] === "зона риска" ? "risk" : "") +
								(categoriesResult[categoriesNames.indexOf(name)] === "неудовлетворительно" ? "bad" : "")}>
								{categoriesResult[categoriesNames.indexOf(name)]}
							</p></div>))}
				</div>
			) : (
				<>
					<div className={'question-section ' + (props.theme ? "dark" : "")}>
						<div className='question-count'>
							<span>Вопрос {questionNumber + 1}</span>/{questionsData.questions.length}
							
						</div>
						<div className='question-text'>{questionsData.questions[questionNumber].questionText}</div>
					</div>
					<div className='answer-section'>
						{questionsData.questions[questionNumber].answerOptions.map(a => (<button className={props.darkTheme ? "dark" : ""} onClick={() => { nextQuestion(a.isTrue, a.categories) }}>{a.answerText}</button>))}
					</div>
				</>
			)}
		</main>
	);
}
