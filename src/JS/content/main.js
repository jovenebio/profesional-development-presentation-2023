//////////////////////////////////////////////////////////////////
//Main Element Content 
//Place all content components and organize them on this page
//////////////////////////////////////////////////////////////////

import {
  aws_intro, 
  before_getting_started,
  aws_guide,
} from './components/aws_tools';

import {
  site_intro,
  non_aws_deployment,
  tools_used,
  next_steps,
} from './components/general_components';

function MAIN_CONTENT() {
  return (
    <main>
      <div id="content_wrapper">
        {site_intro()}
        {aws_intro()}
        {non_aws_deployment()}
        {before_getting_started()} 
        {tools_used()}
        {aws_guide()} 
        {next_steps()}       
      </div>
    </main>    
  );
}

export default MAIN_CONTENT;