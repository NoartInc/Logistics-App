import React from 'react'
import MasterPengirimanIssueForm from './MasterPengirimanIssueForm'
import MasterPengirimanIssueList from './MasterPengirimanIssueList'

function MasterPengirimanIssue() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Form */}
            <div className="shadow overflow-hidden sm:rounded-md md:col-span-5">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <header className="px-0 mt-0 mb-4">
                        <h2 className="font-semibold text-slate-800 uppercase">Form Issue</h2>
                    </header>
                    <div className="sm:flex sm:gap-x-2 py-2">
                        <MasterPengirimanIssueForm />
                    </div>
                </div>
            </div>
            {/* List */}
            <div className="shadow overflow-hidden sm:rounded-md md:col-span-7">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <header className="px-0 mt-0 mb-4">
                        <h2 className="font-semibold text-slate-800 uppercase">List Issue</h2>
                    </header>
                    <div className="sm:flex sm:gap-x-2 py-2">
                        <MasterPengirimanIssueList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasterPengirimanIssue