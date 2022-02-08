import {PAGES} from 'Constants'

const routes = [
    {
        display: 'Home',
        id: PAGES.HOME,
    },
    {
        display: 'Data Lifecycle',
        id: PAGES.DATA_LIFECYCLE.ID,
        children: [
            {
                display: 'Data Onboarding',
                id: 'data-onboarding'
            },
            {
                display: 'Data Processing',
                id: 'data-processing',
                children: [
                    {
                        display: 'Data Quality Assurance',
                        id: 'data-quality-assurance'
                    }
                ]
            },
            {
                display: 'Data Delivery',
                id: 'data-delivery',
                children: [
                    {
                        display: 'Platform Modules',
                        id: 'platform-modules'
                    },
                    {
                        display: 'Machine Learning Solutions',
                        id: 'ml-solutions',
                    },
                    {
                        display: 'Deliverables',
                        id: 'deliverables'
                    }
                ]
            },
            {
                display: 'Overview',
                id: 'overview',
                children: [
                    {
                        display: 'Platform and S3 Linkage',
                        id: 'platform-and-s3-linkage'
                    },
                    {
                        display: 'Standardized Output Graph',
                        id: 'standardized-output-graph',
                    }
                ]
            }
        ]
    },
    {
        id: PAGES.HOME,
        display: '',
    },
    {
        display: 'Platform: Visual Data Hub',
        id: PAGES.VISUAL_DATA_HUB.ID,
        children: [
            {
                id: PAGES.VISUAL_DATA_HUB.YOUR_FIRST_PIPELINE,
                display: 'Your First Pipeline',
            },
            {
                display: 'Glob Patterns',
                id: PAGES.VISUAL_DATA_HUB.GLOB_PATTERNS,
                children: [
                    {
                        display: '1st Example',
                        id: 'example-1'
                    },
                    {
                        display: '2nd Example',
                        id: 'example-2'
                    },
                    {
                        display: '3rd Example',
                        id: 'example-3'
                    },
                    {
                        display: '4th Example',
                        id: 'example-4'
                    },
                    {
                        display: '5th Example',
                        id: 'example-5'
                    },
                    {
                        display: '6th Example',
                        id: 'example-6'
                    }
                ]
            },
            {
                display: 'Module JSON configuration',
                id: PAGES.VISUAL_DATA_HUB.MODULE_JSON_CONFIG
            },
            {
                display: 'Ensuring Data Append',
                id: PAGES.VISUAL_DATA_HUB.ENSURING_DATA_APPENDING
            },
            {
                display: 'Plain Values Dictionary',
                id: PAGES.VISUAL_DATA_HUB.PLAIN_VALUES_DICTIONARY,
                children: [
                    {
                        display: 'What is Plain Values Dictionary?',
                        id: 'what-is-pvd-error'
                    },
                    {
                        display: 'Overcoming the issue',
                        id: 'overcoming-the-issue'
                    }
                ]
            },
            {
                display: 'Querying S3 data on Athena',
                id: PAGES.VISUAL_DATA_HUB.QUERYING_S3_DATA_ON_ATHENA
            },
            {
                display: 'Processing JSON Data',
                id: PAGES.VISUAL_DATA_HUB.PROCESSING_JSON_DATA,
                children: [
                    {
                        display: 'Use Case',
                        id: 'use-case'
                    },
                    {
                        display: 'Solution',
                        id: 'solution'
                    }
                ]
            }
        ]
    },
    {
        display: 'Platform: Dashboards',
        id: PAGES.DASHBOARDS.ID,
        children: [
            {
                display: 'Your First Dashboard',
                id: PAGES.DASHBOARDS.YOUR_FIRST_DASHBOARD,
                children: [
                    {
                        display: 'Exporting to Data Lake',
                        id: 'exporting-to-data-lake'
                    },
                    {
                        display: 'Dashboard Creation',
                        id: 'dashboard-creation'
                    }
                ]
            },
            {
                display: 'Data Splits and Partitions',
                id: PAGES.DASHBOARDS.DATA_SPLITS_AND_PARTITIONS,
                children: [
                    {
                        display: 'Overhead Issues',
                        id: 'overhead-issues'
                    },
                    {
                        id: 'repartition',
                        display: 'Repartition'
                    },
                    {
                        id: 'partition-by',
                        display: 'Partition by'
                    }
                ]
            },
            {
                display: 'Pipeline vs On The Fly Calculations',
                id: PAGES.DASHBOARDS.PIPELINE_VS_ON_THE_FLY,
                children: [
                    {
                        display: 'Your Own Field',
                        id: 'your-own-field'
                    },
                    {
                        display: 'Pipeline Module',
                        id: 'pipeline-module'
                    },
                    {
                        display: 'Conclusion',
                        id: 'conclusion'
                    }
                ]
            }
        ]
    },
    {
        display: 'Platform: Scheduler',
        id: PAGES.SCHEDULER.ID,
        children: [
            {
                display: 'Jobs',
                id: PAGES.SCHEDULER.JOBS,
                children: [
                    {
                        display: 'Tags',
                        id: 'tags',
                    },
                    {
                        display: 'Triggers',
                        id: 'triggers',
                        children: [
                            {
                                display: 'Time Based Trigger',
                                id: 'time-based-trigger'
                            },
                            {
                                display: 'Pipeline Complete Trigger',
                                id: 'pipeline-complete-trigger'
                            },
                            {
                                display: 'Job Failed Trigger',
                                id: 'job-failed-trigger'
                            }
                        ]
                    },
                    {
                        display: 'Tasks',
                        id: 'tasks'
                    },
                ]
            },
            {
                display: 'Clusters',
                id: PAGES.SCHEDULER.CLUSTERS,
                children: [
                    {
                        display: 'Spot Options',
                        id: 'spot-options'
                    },
                    {
                        display: 'Bootstrap Configurations and Actions',
                        id: 'bootstrap-advanced-configs'
                    },
                    {
                        display: 'Nodes',
                        id: 'nodes',
                        children: [
                            {
                                display: 'Master Instance',
                                id: 'master-instances'
                            },
                            {
                                display: 'Core Instance',
                                id: 'core-instances'
                            },
                            {
                                display: 'Single Capacity',
                                id: 'single-capacity'
                            }
                        ]
                    },
                ]
            },
            {
                display: 'Use Cases',
                id: PAGES.SCHEDULER.USE_CASES,
                children: [
                    {
                        display: 'First',
                        id: 'first'
                    },
                    {
                        display: 'Second',
                        id: 'second'
                    },
                    {
                        display: 'To keep in mind',
                        id: 'keeping-in-mind'
                    }
                ]
            }
        ]
    },
    {
        id: PAGES.HOME,
        display: '',
    },
    {
        display: 'Development',
        id: PAGES.DEVELOPMENT.ID,
        children: [
            {
                display: 'ETL: Making a Module',
                id: PAGES.DEVELOPMENT.EXTRACT_TRANSFORM_LOAD,
                children: [
                    {
                        display: 'Registration',
                        id: 'registration'
                    },
                    {
                        display: 'Implementation',
                        id: 'implementation'
                    },
                    {
                        display: 'Things to Consider',
                        id: 'things-to-consider'
                    }
                ]
            }
        ]
    }
]

const format = (which) => {
    let children = which.children || []
    return {
        ...which,
        id: !which.id ? which.display.replace(/ /g, '').replace(/[^a-zA-Z]/g, '').toLowerCase() : which.id,
        children: children.map(format)
    }
}

export const findById = (id) => {
    return routes.reduce((flatten, next) => {
        let children = next.children || []
        return [...flatten, next, ...children]
    }, []).find(which => which.id === id)
}

export default routes.map(format)


