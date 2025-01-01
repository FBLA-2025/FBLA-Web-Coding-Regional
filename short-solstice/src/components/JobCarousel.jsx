'use client'

// import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from "react"

// interface Job {
//   id: number
//   title: string
//   company: string
//   location: string
//   type: string
// }

// const sampleJobs: Job[] = [
const sampleJobs = [
  {
    id: 1,
    title: "Software Developer Intern",
    company: "Tech Solutions Inc.",
    location: "Remote",
    type: "Internship"
  },
  {
    id: 2,
    title: "Marketing Assistant",
    company: "Global Marketing Group",
    location: "New York, NY",
    type: "Part-time"
  },
  {
    id: 3,
    title: "Research Assistant",
    company: "Science Labs",
    location: "Boston, MA",
    type: "Full-time"
  },
  {
    id: 4,
    title: "Graphic Design Intern",
    company: "Creative Studios",
    location: "Remote",
    type: "Internship"
  },
  {
    id: 5,
    title: "Business Analyst",
    company: "Finance Corp",
    location: "Chicago, IL",
    type: "Full-time"
  }
]

export default function JobCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= sampleJobs.length ? 0 : prevIndex + 3
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(sampleJobs.length - 3, 0) : prevIndex - 3
    )
  }

  const visibleJobs = sampleJobs.slice(currentIndex, currentIndex + 3)

  return (
    <section className="job-carousel">
      <div className="container">
        <div className="carousel-header">
          <h2 className="title">Latest Job Postings</h2>
          <div className="navigation">
            <button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="nav-button"
            >
              <i class="fa-solid fa-chevron-left icon"></i>
            </button>
            <button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="nav-button"
            >
              <i class="fa-solid fa-chevron-right icon"></i>
            </button>
          </div>
        </div>

        <div className="job-grid">
          {visibleJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3 className="job-title">{job.title}</h3>
              <p className="job-company">{job.company}</p>
              <p className="job-details">{job.location} • {job.type}</p>
              <button variant="outline" className="details-button">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .job-carousel {
          padding: 4rem 0;
        }
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .carousel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .title {
          font-size: 1.875rem;
          font-weight: 700;
        }
        .navigation {
          display: flex;
          gap: 0.5rem;
        }
        .nav-button {
          height: 2rem;
          width: 2rem;
        }
        .icon {
          height: 1rem;
          width: 1rem;
        }
        .job-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .job-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .job-card {
          padding: 1.5rem;
        }
        .job-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .job-company {
          color: #4b5563;
          margin-bottom: 0.25rem;
        }
        .job-details {
          color: #6b7280;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }
        .details-button {
          width: 100%;
        }
      `}</style>
    </section>
  )
}
