<template>
    <div>
        <div class="page-headers clear-filter" filter-color="green">
        <parallax class="page-header-image" style="background-image:url('img/images/bg.jpg')">
        </parallax>

        <!-- Landing Section -->
        <div class="container">
                <div class="col-12 text-center songaUko">
                    <!-- Soko Sasa Branding -->
                    <div class="brand margBrand">
                        <h1>SOKO SASA</h1>
                        <h4>Connecting Famers and Buyers in Real Time</h4>
                    </div>
                    <!-- End of Soko Sasa Branding -->
                </div>
        </div>
        <!-- End Landing Section -->
        </div>

        <tabs-section></tabs-section>
        <download-section></download-section>
    </div>
</template>
<script>
    import {
        Parallax
    } from '@/components';
    import BasicElements from './components/BasicElementsSection';
    import Navigation from './components/Navigation';
    import TabsSection from './components/Tabs';
    import ProgressPagination from './components/ProgressPagination';
    import Notifications from './components/Notifications';
    import Typography from './components/Typography';
    import JavascriptComponents from './components/JavascriptComponents';
    import CarouselSection from './components/CarouselSection';
    import NucleoIconsSection from './components/NucleoIconsSection';
    import SignupForm from './components/SignupForm';
    import ExamplesSection from './components/ExamplesSection';
    import DownloadSection from './components/DownloadSection';

    export default {
        name: 'index',
        bodyClass: 'index-page',
        components: {
            Parallax,
            BasicElements,
            Navigation,
            TabsSection,
            ProgressPagination,
            Notifications,
            Typography,
            JavascriptComponents,
            CarouselSection,
            NucleoIconsSection,
            SignupForm,
            ExamplesSection,
            DownloadSection
        },

        data() {
            return {
              
            }
        },

        methods: {}

    };
</script>
<style></style>
