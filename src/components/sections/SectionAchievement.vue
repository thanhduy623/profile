<template>
    <section
        id="achievement"
        class="w-full flex flex-col gap-4 p-6 my-3"
    >

        <h2 class="text-primary uppercase">
            {{ $t('achievement.titleSection') }}
        </h2>


        <div
            class="grid grid-cols-3 gap-4"
        >

            <AchievementCard
                v-for="item in achievementList"
                :key="item.key"
                :logo="item.logo"
                :quantity="item.quantity"
                :achive="item.achive"
                :content="item.content"
                :organization="item.organization"
                @click="openPopup(item.key, item.organization)"
            />

        </div>


        <PopupAchievementComponent
            v-model="popupVisible"
            :title="popupTitle"
            :type="popupType"
        />

    </section>
</template>


<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'


import AchievementCard from '@/components/cards/AchievementCard.vue'
import PopupAchievementComponent from '@/components/overlays/PopupAchievementComponent.vue'


import {
    logoParty,
    logoYouth,
    logoEducation,
    logoCertification,
    logoLanguage
} from '@/data/images'


const { t } = useI18n()



// Load toàn bộ file achievement
const achievementFiles = import.meta.glob(
    '@/assets/images/achivements/*/*',
    {
        eager: true,
        query: '?url',
        import: 'default'
    }
)



const getQuantity = key => {

    return Object.keys(achievementFiles)
        .filter(path =>
            path.includes(`/achivements/${key}/`)
        )
        .length

}



const achievementList = computed(() => [

    {
        key: 'party',
        logo: logoParty,
        quantity: getQuantity('party'),

        achive: t('achievement.items.party.achive'),
        content: t('achievement.items.party.content'),
        organization: t('achievement.items.party.organization')
    },


    {
        key: 'youth',
        logo: logoYouth,
        quantity: getQuantity('youth'),

        achive: t('achievement.items.youth.achive'),
        content: t('achievement.items.youth.content'),
        organization: t('achievement.items.youth.organization')
    },


    {
        key: 'education',
        logo: logoEducation,
        quantity: getQuantity('education'),

        achive: t('achievement.items.education.achive'),
        content: t('achievement.items.education.content'),
        organization: t('achievement.items.education.organization')
    },


    {
        key: 'certification',
        logo: logoCertification,
        quantity: getQuantity('certification'),

        achive: t('achievement.items.certification.achive'),
        content: t('achievement.items.certification.content'),
        organization: t('achievement.items.certification.organization')
    },

    {
        key: 'language',
        logo: logoLanguage,
        quantity: getQuantity('language'),

        achive: t('achievement.items.language.achive'),
        content: t('achievement.items.language.content'),
        organization: t('achievement.items.language.organization')
    }

])



const popupVisible = ref(false)

const popupType = ref('')

const popupTitle = ref('')



const openPopup = (key, title) => {

    popupType.value = key

    popupTitle.value = title

    popupVisible.value = true

}

</script>