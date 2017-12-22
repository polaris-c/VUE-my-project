import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

let routerComponents = [
    {
      	path: '/',
      	name: 'HelloWorld',
        meta: {
    		loginRequired: false
    	},
      	component: HelloWorld,
      	children: [
    		{
    			path: 'rain',
    			meta: {
    				loginRequired: true
    			},
    			component: {
	    			template: `
	    				<div>
	    					<h2>Success!</h2>	
	    				</div>	
	    			`				
    			}
    		}
    	]
    }
];

Vue.use(Router)

export default new Router({
  routes: routerComponents
})
