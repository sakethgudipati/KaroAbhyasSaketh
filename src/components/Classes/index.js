import Navbar from '../Navbar/index'
import ClassesList from '../ClassesList/index'
import './index.css'

const classList = [
  {
    id: 11,
    title: 'Mastering Quantitative Aptitude for CAT 2024: Tips & Tricks',
    description:
      'Dive into essential strategies and problem-solving techniques to boost your quantitative aptitude for CAT 2024. This video provides a comprehensive breakdown of complex problems simplified into manageable steps, ensuring you grasp the fastest methods to tackle typical exam questions.',
    thumbnail:
      'https://res.cloudinary.com/defacaof3/image/upload/v1712992755/maxresdefault_svcrry.jpg',
  },
  {
    id: 12,
    title: 'UPSC CSE Prelims: Complete Syllabus Revision in 30 Days!',
    description:
      'Prepare for the UPSC Civil Services Prelims with our 30-day revision schedule. Each episode covers key topics, with insights on important trends and how to approach the exam strategically to maximize your score.',
    thumbnail:
      'https://res.cloudinary.com/defacaof3/image/upload/v1712992795/maxresdefault_s2cldn.jpg',
  },
  {
    id: 13,
    title: '10 Common Mistakes in IELTS Writing: How to Avoid Them',
    description:
      'Elevate your IELTS writing score by learning how to steer clear of these top 10 common mistakes. Our experts discuss practical examples and offer corrections that you can apply to your writing strategy immediately.',
    thumbnail:
      'https://res.cloudinary.com/defacaof3/image/upload/v1712992936/maxresdefault_nsbihj.jpg',
  },
  {
    id: 14,
    title: 'Decoding NEET Biology: Important Diagrams and Their Explanations',
    description:
      'Enhance your NEET preparation with our detailed guide on crucial biology diagrams. This video explains diagrams to improve your understanding and retention, crucial for scoring high in the biology section.',
    thumbnail:
      'https://res.cloudinary.com/defacaof3/image/upload/v1712992983/maxresdefault_nn9u5b.jpg',
  },
  {
    id: 15,
    title: 'JEE Advanced Physics: Solving Problems on Thermodynamics',
    description:
      'Join us as we tackle thermodynamics problems, focusing on concepts that frequently perplex JEE Advanced candidates. Learn the formulas, shortcuts, and logical reasoning needed to excel in this challenging topic.',
    thumbnail:
      'https://res.cloudinary.com/defacaof3/image/upload/v1712993128/maxresdefault_b4nakc.jpg',
  },
  {
    id: 16,
    title: 'Beat the GMAT: Effective Strategies for a 700+ Score',
    description:
      'Targeting a 700+ score on the GMAT? This video unpacks proven strategies and study tips from top scorers. From quantitative puzzles to verbal reasoning, get the insights you need to excel.',
    thumbnail:
      'https://res.cloudinary.com/defacaof3/image/upload/v1712993162/maxresdefault_acgfxs.jpg',
  },
  {
    id: 17,
    title: 'CSS Exam Preparation: Crafting High-Scoring Essay Answers',
    description:
      'Master the art of essay writing for the CSS exams with our detailed tutorial. Learn how to structure your essays, utilize effective writing techniques, and impress examiners with your analytical skills.',
    thumbnail:
      'https://res.cloudinary.com/defacaof3/image/upload/v1712993304/Yellow-Make-Money-Daily-YouTube-Thumbnail-1_pylloy.png',
  },
]

const Classes = () => (
  <>
    <Navbar />
    <div className="classes-bg-container">
      <ul className="classes-list">
        {classList.map(eachClass => (
          <ClassesList key={eachClass.id} classInfo={eachClass} />
        ))}
      </ul>
    </div>
  </>
)

export default Classes
