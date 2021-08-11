import IBlogPost from './IBlogPost'

interface IBlogPostPage extends IBlogPost {
	wordCount: number
	readingTime: {
		text: string
		minutes: number
		time: number
		words: number
	}
}

export default IBlogPostPage
