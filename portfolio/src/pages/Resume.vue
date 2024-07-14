<template>
    <div>
        <div class="flex items-center mb-6">
            <h1 class="text-4xl font-roboto-slab font-black mr-4 whitespace-nowrap">{{ $t('resume.resume') }}</h1>
            <div class="w-1/3 h-1 bg-blue-500"></div>
        </div>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div v-for="(section, index) in resumeSections" :key="index">
                <div class="flex items-center mb-4 p-2">
                    <v-icon :name="section.icon" scale="2" class="mr-2" :fill="section.iconColor"></v-icon>
                    <h2 class="text-2xl font-montserrat font-black">{{ $t(section.title) }}</h2>
                </div>
                <div v-for="(item, itemIndex) in section.items" :key="itemIndex"
                    :class="[itemIndex % 2 === 1 ? 'bg-[#edf4fa]' : 'bg-gray-100', 'rounded-3xl p-7 mb-6']">
                    <div class="md:flex md:p-2">
                        <div>
                            <p class="text-md font-montserrat">{{ item.date }}</p>
                            <h3 class="text-xl font-montserrat font-extrabold">{{ item.title }}</h3>
                            <p class="text-md font-montserrat italic">{{ item.location }}</p>
                        </div>
                    </div>
                </div>
                <div v-for="(progressItem, progressIndex) in section.progress" :key="progressIndex">
                    <div class="pl-2 mb-6">
                        <div class="md:flex md:p-2">
                            <div class="w-full">
                                <div class="flex justify-between">
                                    <h3 class="text-lg font-montserrat font-medium">{{ $t(progressItem.title) }}</h3>
                                    <p class="text-lg font-montserrat font-medium">{{ progressItem.percentage }}%</p>
                                </div>
                                <div :style="{ width: progressItem.percentage + '%', backgroundColor: progressItem.color }"
                                    class="h-2 bg-gray-200 mt-2 rounded-full">
                                    <div class="h-full rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="xl:col-span-1">
                <div class="flex items-center mb-4 p-2">
                    <v-icon name="si-bookstack" scale="2" class="mr-2" fill="#ff7690"></v-icon>
                    <h2 class="text-2xl font-montserrat font-black">{{ $t('resume.knowledges') }}</h2>
                </div>
                <div class="mt-2">
                    <div class="flex flex-wrap gap-2">
                        <span v-for="(skill, skillIndex) in skills" :key="skillIndex"
                            class="inline-block bg-[#ebf3f5] px-4 py-2 text-lg font-normal text-gray-600 rounded-md mr-4 my-1">
                            {{ $t(skill) }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Resume',
    data() {
        return {
            resumeSections: [
                {
                    title: 'resume.education',
                    icon: 'io-school',
                    iconColor: '#379cee',
                    items: [
                        { date: '2018 - 2022', title: 'Universidad de Cundinamarca', location: 'Soacha, Cundinamarca' },
                        { date: '2016 - 2017', title: 'SENA', location: 'Soacha, Cundinamarca' }
                    ]
                },
                {
                    title: 'resume.experience',
                    icon: 'fa-briefcase',
                    iconColor: '#379cee',
                    items: [
                        { date: '2023 - 2024', title: 'Desarrollador Web Angular', location: 'VMO Central SAS' },
                        { date: '2021 - 2022', title: 'Desarrollador Web JOOMLA', location: 'Universidad de Cundinamarca' },
                        { date: '2020 - 2022', title: 'Desarrollador Móvil IONIC', location: 'Universidad Nacional' }
                    ]
                },
                {
                    title: 'resume.abilities',
                    icon: 'hi-solid-light-bulb',
                    iconColor: '#ff7690',
                    progress: [
                        { title: 'about.jobs.web', percentage: 75, color: '#ff7690' },
                        { title: 'about.jobs.app', percentage: 50, color: '#ed8936' },
                        { title: 'about.jobs.design', percentage: 60, color: '#36C2CE' },
                    ]
                }
            ],
            skills: [
                'Angular',
                'Node.JS',
                'Typescript',
                'SQL',
                'React',
                'Github',
                'HTML',
                'CSS',
                'IONIC',
                'Javascript',
                'Firebase',
                'SCRUM',
                'JOOMLA',
                'Tailwind',
                'SASS',
                'resume.problem-solving',
                'resume.team-work',
                'resume.progressive-learning',
            ]
        };
    }
};
</script>
