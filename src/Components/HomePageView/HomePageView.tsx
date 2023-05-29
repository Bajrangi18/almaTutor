import ControlledCarousel from './CarousalView';
import FeatureView from './FeatureView';
import ProjectView from './ProjectView';
import ReasonalView from './ReasonalView';

const HomePageView = () => {
    return(
      <main>
        <ControlledCarousel />
        <br></br>
        <ProjectView />
        <br></br>
        <ReasonalView />
        <br></br>
        <FeatureView />
      </main>
    )
}

export default HomePageView