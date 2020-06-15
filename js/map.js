(function () {
	'use strict';

	var map = function (t) {

	  return t.useMap = t => {
	    let e = L.map("mapid").setView([40.657402, -73.949126], 10);
	    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVwb2pla2EiLCJhIjoiY2tiOWx2eDRuMGZqMjJ4bzRndnUxcDY1NSJ9.Q4KnNwlVBSDCT1lMpucEJA", {
	      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	      maxZoom: 15,
	      id: "mapbox/streets-v11",
	      tileSize: 512,
	      zoomOffset: -1,
	      opacity: 1
	    }).addTo(e);
	    L.marker([40.657402, -73.949126]).addTo(e);
	  }, t;
	}({});

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlcyI6WyJzcmMvanMvbWFwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXA9ZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIHQudXNlTWFwPXQ9PntsZXQgZT1MLm1hcChcIm1hcGlkXCIpLnNldFZpZXcoWzQwLjY1NzQwMiwtNzMuOTQ5MTI2XSwxMCk7TC50aWxlTGF5ZXIoXCJodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS97aWR9L3RpbGVzL3t6fS97eH0ve3l9P2FjY2Vzc190b2tlbj1way5leUoxSWpvaVpHVndiMnBsYTJFaUxDSmhJam9pWTJ0aU9XeDJlRFJ1TUdacU1qSjRielJuZG5VeGNEWTFOU0o5LlE0S25Od2xWQlNEQ1QxbE1wdWNFSkFcIix7YXR0cmlidXRpb246J01hcCBkYXRhICZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvXCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzLCA8YSBocmVmPVwiaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzIuMC9cIj5DQy1CWS1TQTwvYT4sIEltYWdlcnkgwqkgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vXCI+TWFwYm94PC9hPicsbWF4Wm9vbToxNSxpZDpcIm1hcGJveC9zdHJlZXRzLXYxMVwiLHRpbGVTaXplOjUxMix6b29tT2Zmc2V0Oi0xLG9wYWNpdHk6MX0pLmFkZFRvKGUpO0wubWFya2VyKFs0MC42NTc0MDIsLTczLjk0OTEyNl0pLmFkZFRvKGUpfSx0fSh7fSk7XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGY4O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGd0xtcHpJaXdpYzI5MWNtTmxjeUk2V3lKemNtTXZhbk12YldGd0xtcHpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWx3aWRYTmxJSE4wY21samRGd2lPMXh5WEc1bGVIQnZjblFnWTI5dWMzUWdkWE5sVFdGd0lEMGdLR1JwY21WamRHbHZiaWtnUFQ0Z2UxeHlYRzRnSUd4bGRDQnRlVzFoY0NBOUlFd3ViV0Z3S0Z3aWJXRndhV1JjSWlrdWMyVjBWbWxsZHloYk5EQXVOalUzTkRBeUxDQXROek11T1RRNU1USTJYU3dnTVRBcE8xeHlYRzVjY2x4dUlDQk1MblJwYkdWTVlYbGxjaWhjY2x4dUlDQWdJRndpYUhSMGNITTZMeTloY0drdWJXRndZbTk0TG1OdmJTOXpkSGxzWlhNdmRqRXZlMmxrZlM5MGFXeGxjeTk3ZW4wdmUzaDlMM3Q1ZlQ5aFkyTmxjM05mZEc5clpXNDljR3N1WlhsS01VbHFiMmxhUjFaM1lqSndiR0V5UldsTVEwcG9TV3B2YVZreWRHbFBWM2d5WlVSU2RVMUhXbkZOYWtvMFlucFNibVJ1VlhoalJGa3hUbE5LT1M1Uk5FdHVUbmRzVmtKVFJFTlVNV3hOY0hWalJVcEJYQ0lzWEhKY2JpQWdJQ0I3WEhKY2JpQWdJQ0FnSUdGMGRISnBZblYwYVc5dU9seHlYRzRnSUNBZ0lDQWdJQ2ROWVhBZ1pHRjBZU0FtWTI5d2VUc2dQR0VnYUhKbFpqMWNJbWgwZEhCek9pOHZkM2QzTG05d1pXNXpkSEpsWlhSdFlYQXViM0puTDF3aVBrOXdaVzVUZEhKbFpYUk5ZWEE4TDJFK0lHTnZiblJ5YVdKMWRHOXljeXdnUEdFZ2FISmxaajFjSW1oMGRIQnpPaTh2WTNKbFlYUnBkbVZqYjIxdGIyNXpMbTl5Wnk5c2FXTmxibk5sY3k5aWVTMXpZUzh5TGpBdlhDSStRME10UWxrdFUwRThMMkUrTENCSmJXRm5aWEo1SU1LcElEeGhJR2h5WldZOVhDSm9kSFJ3Y3pvdkwzZDNkeTV0WVhCaWIzZ3VZMjl0TDF3aVBrMWhjR0p2ZUR3dllUNG5MRnh5WEc0Z0lDQWdJQ0J0WVhoYWIyOXRPaUF4TlN4Y2NseHVJQ0FnSUNBZ2FXUTZJRndpYldGd1ltOTRMM04wY21WbGRITXRkakV4WENJc1hISmNiaUFnSUNBZ0lIUnBiR1ZUYVhwbE9pQTFNVElzWEhKY2JpQWdJQ0FnSUhwdmIyMVBabVp6WlhRNklDMHhMRnh5WEc0Z0lDQWdJQ0J2Y0dGamFYUjVPaUF4TEZ4eVhHNGdJQ0FnZlZ4eVhHNGdJQ2t1WVdSa1ZHOG9iWGx0WVhBcE8xeHlYRzRnSUd4bGRDQnRZWEpyWlhJZ1BTQk1MbTFoY210bGNpaGJOREF1TmpVM05EQXlMQ0F0TnpNdU9UUTVNVEkyWFNrdVlXUmtWRzhvYlhsdFlYQXBPMXh5WEc1OU8xeHlYRzRpWFN3aWJtRnRaWE1pT2xzaVpHbHlaV04wYVc5dUlpd2liWGx0WVhBaUxDSk1JaXdpYldGd0lpd2ljMlYwVm1sbGR5SXNJblJwYkdWTVlYbGxjaUlzSW1GMGRISnBZblYwYVc5dUlpd2liV0Y0V205dmJTSXNJbWxrSWl3aWRHbHNaVk5wZW1VaUxDSjZiMjl0VDJabWMyVjBJaXdpYjNCaFkybDBlU0lzSW1Ga1pGUnZJaXdpYldGeWEyVnlJbDBzSW0xaGNIQnBibWR6SWpvaWFVUkJRM1ZDUVN4UlFVTnFRa01zUlVGQlVVTXNSVUZCUlVNc1NVRkJTU3hUUVVGVFF5eFJRVUZSTEVOQlFVTXNWMEZCV1N4WFFVRlpMRWxCUlRWRVJpeEZRVUZGUnl4VlFVTkJMR3RMUVVOQkxFTkJRMFZETEZsQlEwVXNNRTVCUTBaRExGRkJRVk1zUjBGRFZFTXNSMEZCU1N4eFFrRkRTa01zVTBGQlZTeEpRVU5XUXl4WlFVRmhMRVZCUTJKRExGRkJRVk1zU1VGRldFTXNUVUZCVFZnc1IwRkRTME1zUlVGQlJWY3NUMEZCVHl4RFFVRkRMRmRCUVZrc1dVRkJXVVFzVFVGQlRWZ2lmUT09XHJcbiJdLCJuYW1lcyI6WyJkaXJlY3Rpb24iLCJteW1hcCIsIkwiLCJtYXAiLCJzZXRWaWV3IiwidGlsZUxheWVyIiwiYXR0cmlidXRpb24iLCJtYXhab29tIiwiaWQiLCJ0aWxlU2l6ZSIsInpvb21PZmZzZXQiLCJvcGFjaXR5IiwiYWRkVG8iLCJtYXJrZXIiXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUN1QkEsQ0FBQUEsSUFBQUE7Q0FBQUEsUUFDakJDLENBQUFBLEdBQVFDLENBQUFBLENBQUVDLEdBQUZELENBQU0sT0FBTkEsRUFBZUUsT0FBZkYsQ0FBdUIsQ0FBQyxTQUFELEVBQUMsQ0FBWSxTQUFiLENBQXZCQSxFQUFnRCxFQUFoREEsQ0FEU0Y7Q0FHckJFLElBQUFBLENBQUFBLENBQUVHLFNBQUZILENBQ0UsaUtBREZBLEVBRUU7Q0FDRUksTUFBQUEsV0FBQUEsRUFDRSx5TkFGSjtDQUdFQyxNQUFBQSxPQUFBQSxFQUFTLEVBSFg7Q0FJRUMsTUFBQUEsRUFBQUEsRUFBSSxvQkFKTjtDQUtFQyxNQUFBQSxRQUFBQSxFQUFVLEdBTFo7Q0FNRUMsTUFBQUEsVUFBQUEsRUFBQUEsQ0FBYSxDQU5mO0NBT0VDLE1BQUFBLE9BQUFBLEVBQVM7Q0FQWCxLQUZGVCxFQVdFVSxLQVhGVixDQVdRRCxDQVhSQztDQVlhQSxJQUFBQSxDQUFBQSxDQUFFVyxNQUFGWCxDQUFTLENBQUMsU0FBRCxFQUFDLENBQVksU0FBYixDQUFUQSxFQUFrQ1UsS0FBbENWLENBQXdDRCxDQUF4Q0M7Q0FBd0NELEtBQUFBO0NBQUFBLEVBQUFBOzs7OyJ9
