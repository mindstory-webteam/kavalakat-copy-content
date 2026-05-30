'use client'

import FooterTop from '@/components/FooterTop'
import InnerPageHeader from '@/components/InnerPageHeader'
import Link from 'next/link'
import React, { useState } from 'react'
import Footer1 from '@/components/Footer'
import Breadcrumb from '@/components/common/Breadcrumb'
import Image from 'next/image'

interface Job {
    id: number
    title: string
    department: string
    location: string
    type: string
    posted: string
    description: string
}

interface FormData {
    fullName: string
    email: string
    phone: string
    coverLetter: string
    resume: File | null
}

const CareerPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [selectedJob, setSelectedJob] = useState<Job | null>(null)
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phone: '',
        coverLetter: '',
        resume: null
    })

    const jobListings: Job[] = [
        {
            id: 1,
            title: 'Senior Frontend Developer',
            department: 'Engineering',
            location: 'Remote',
            type: 'Full-time',
            posted: '5 Mar, 2025',
            description: 'We are looking for an experienced Frontend Developer to join our dynamic team. You will be responsible for building responsive and interactive user interfaces using modern web technologies.'
        },
        {
            id: 2,
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'New York, NY',
            type: 'Full-time',
            posted: '3 Mar, 2025',
            description: 'Join our creative team as a UI/UX Designer. You will create beautiful and intuitive designs that enhance user experience across our digital products.'
        },
        {
            id: 3,
            title: 'Backend Developer',
            department: 'Engineering',
            location: 'San Francisco, CA',
            type: 'Full-time',
            posted: '1 Mar, 2025',
            description: 'We need a talented Backend Developer to build and maintain robust server-side applications and APIs that power our platform.'
        }
    ]

    const handleApplyClick = (job: Job) => {
        setSelectedJob(job)
        setIsModalOpen(true)
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden'
        }
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedJob(null)
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'auto'
        }
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            coverLetter: '',
            resume: null
        })
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file && file.type === 'application/pdf') {
            setFormData(prev => ({
                ...prev,
                resume: file
            }))
        } else {
            alert('Please upload a PDF file only')
            e.target.value = ''
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if (!selectedJob) return

        // Create FormData object for file upload
        const submitData = new FormData()
        submitData.append('fullName', formData.fullName)
        submitData.append('email', formData.email)
        submitData.append('phone', formData.phone)
        submitData.append('coverLetter', formData.coverLetter)
        submitData.append('jobId', selectedJob.id.toString())
        submitData.append('jobTitle', selectedJob.title)
        
        if (formData.resume) {
            submitData.append('resume', formData.resume)
        }

        // Here you would typically send the data to your API
        // Example API call:
        // try {
        //     const response = await fetch('/api/careers/apply', {
        //         method: 'POST',
        //         body: submitData
        //     })
        //     const result = await response.json()
        //     if (response.ok) {
        //         alert('Application submitted successfully!')
        //         closeModal()
        //     }
        // } catch (error) {
        //     console.error('Error submitting application:', error)
        //     alert('Failed to submit application. Please try again.')
        // }

        console.log('Form submitted:', {
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            coverLetter: formData.coverLetter,
            resume: formData.resume?.name,
            jobId: selectedJob.id,
            jobTitle: selectedJob.title
        })
        
        alert('Application submitted successfully!')
        closeModal()
    }

    return (
        <>
            <InnerPageHeader />
            <Breadcrumb 
                title="Careers" 
                subtitle="Join Our Team & Build Your Future With Us" 
                image="/assets/new-images/bm/bm-1.png" 
            />
            
            <div className="career-page pt-120 mb-120">
                <div className="container">
                    {/* Career Introduction */}
                    <div className="row mb-70">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2>Why Work With Us?</h2>
                            <p className="mt-4">
                                We&apos;re always looking for talented individuals to join our growing team. 
                                We offer competitive salaries, great benefits, and a collaborative work environment 
                                where you can grow your career and make an impact.
                            </p>
                        </div>
                    </div>

                    {/* Job Listings */}
                    <div className="row gy-5">
                        {jobListings.map((job) => (
                            <div key={job.id} className="col-lg-12">
                                <div className="job-card">
                                    <div className="job-header">
                                        <div className="job-info">
                                            <h3>{job.title}</h3>
                                            <ul className="job-meta">
                                                <li>
                                                    <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8 0C3.60594 0 0 3.60594 0 8C0 12.3941 3.60594 16 8 16C12.3941 16 16 12.3941 16 8C16 3.60594 12.3941 0 8 0Z" />
                                                    </svg>
                                                    {job.posted}
                                                </li>
                                                <li>
                                                    <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8 0C3.60594 0 0 3.60594 0 8C0 12.3941 3.60594 16 8 16C12.3941 16 16 12.3941 16 8C16 3.60594 12.3941 0 8 0Z" />
                                                    </svg>
                                                    {job.location}
                                                </li>
                                                <li>
                                                    <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8 0C3.60594 0 0 3.60594 0 8C0 12.3941 3.60594 16 8 16C12.3941 16 16 12.3941 16 8C16 3.60594 12.3941 0 8 0Z" />
                                                    </svg>
                                                    {job.type}
                                                </li>
                                                <li>
                                                    <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8 0C3.60594 0 0 3.60594 0 8C0 12.3941 3.60594 16 8 16C12.3941 16 16 12.3941 16 8C16 3.60594 12.3941 0 8 0Z" />
                                                    </svg>
                                                    {job.department}
                                                </li>
                                            </ul>
                                        </div>
                                        <button 
                                            onClick={() => handleApplyClick(job)}
                                            className="apply-btn primary-btn3 black-bg"
                                            type="button"
                                        >
                                            <span>Apply Now</span>
                                            <span>Apply Now</span>
                                            <svg className="arrow" width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                                                    <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="job-description">
                                        <p>{job.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Application Modal */}
            {isModalOpen && selectedJob && (
                <div className="career-modal-overlay" onClick={closeModal}>
                    <div className="career-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={closeModal} type="button">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        
                        <div className="modal-header">
                            <h3>Apply for {selectedJob.title}</h3>
                            <p>{selectedJob.department} • {selectedJob.location}</p>
                        </div>

                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-inner mb-30">
                                            <label>Full Name *</label>
                                            <input 
                                                type="text" 
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-inner mb-30">
                                            <label>Email *</label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-inner mb-30">
                                            <label>Phone *</label>
                                            <input 
                                                type="tel" 
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-inner mb-30">
                                            <label>Upload Resume (PDF only) *</label>
                                            <div className="file-upload-wrapper">
                                                <input 
                                                    type="file" 
                                                    id="resume"
                                                    accept=".pdf"
                                                    onChange={handleFileChange}
                                                    required
                                                    className="file-input"
                                                />
                                                <label htmlFor="resume" className="file-upload-label">
                                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 0L13 3L10.5 5.5L9.5 4.5V12H10.5V4.5L9.5 5.5L13 3L10 0Z" fill="currentColor"/>
                                                        <path d="M2 8V18H18V8H15V10H16V16H4V10H5V8H2Z" fill="currentColor"/>
                                                    </svg>
                                                    {formData.resume ? formData.resume.name : 'Choose PDF file'}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-inner mb-50">
                                            <label>Cover Letter *</label>
                                            <textarea 
                                                name="coverLetter"
                                                value={formData.coverLetter}
                                                onChange={handleInputChange}
                                                rows={6}
                                                placeholder="Tell us why you're a great fit for this position..."
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-inner">
                                    <button type="submit" className="primary-btn3 black-bg w-100">
                                        <span>Submit Application</span>
                                        <span>Submit Application</span>
                                        <svg className="arrow" width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                                                <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <FooterTop />
            <Footer1 />

            <style jsx>{`
                .job-card {
                    background: #fff;
                    padding: 40px;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    transition: all 0.3s ease;
                }

                .job-card:hover {
                    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
                    transform: translateY(-5px);
                }

                .job-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 20px;
                    flex-wrap: wrap;
                    gap: 20px;
                }

                .job-info h3 {
                    font-size: 28px;
                    margin-bottom: 15px;
                    color: #1a1a1a;
                }

                .job-meta {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                }

                .job-meta li {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 14px;
                    color: #0160b2;
                }

                .job-meta svg {
                    width: 16px;
                    height: 16px;
                    fill: currentColor;
                }

                .apply-btn {
                    white-space: nowrap;
                    min-width: 150px;
                }

                .job-description p {
                    color: #666;
                    line-height: 1.8;
                }

                .career-modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    padding: 20px;
                    overflow-y: auto;
                }

                .career-modal-content {
                    background: #fff;
                    border-radius: 12px;
                    width: 100%;
                    max-width: 700px;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    margin: auto;
                }

                .modal-close-btn {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    padding: 5px;
                    color: #666;
                    transition: color 0.3s ease;
                    z-index: 10;
                }

                .modal-close-btn:hover {
                    color: #000;
                }

                .modal-header {
                    padding: 40px 40px 20px;
                    border-bottom: 1px solid #eee;
                }

                .modal-header h3 {
                    font-size: 28px;
                    margin-bottom: 10px;
                    color: #1a1a1a;
                }

                .modal-header p {
                    color: #666;
                    margin: 0;
                }

                .modal-body {
                    padding: 40px;
                }

                .file-upload-wrapper {
                    position: relative;
                }

                .file-input {
                    position: absolute;
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .file-upload-label {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 15px 20px;
                    background: #f5f5f5;
                    border: 2px dashed #ccc;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    color: #666;
                }

                .file-upload-label:hover {
                    background: #eee;
                    border-color: #999;
                }

                .file-upload-label svg {
                    width: 20px;
                    height: 20px;
                }

                @media (max-width: 768px) {
                    .job-header {
                        flex-direction: column;
                    }

                    .apply-btn {
                        width: 100%;
                    }

                    .modal-header,
                    .modal-body {
                        padding: 30px 20px;
                    }

                    .job-card {
                        padding: 25px;
                    }

                    .job-info h3 {
                        font-size: 22px;
                    }
                }
            `}</style>
        </>
    )
}

export default CareerPage