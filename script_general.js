(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"minWidth":20,"borderRadius":0,"class":"Player","backgroundColorDirection":"vertical","gap":10,"vrPolyfillScale":1,"width":"100%","mediaActivationMode":"window","backgroundColorRatios":[0],"id":"rootPlayer","backgroundOpacity":1,"horizontalAlign":"left","paddingTop":0,"paddingBottom":0,"paddingLeft":0,"buttonToggleFullscreen":"this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","definitions": [{"minWidth":280,"class":"Label","data":{"name":"Label28174"},"width":280,"textDecoration":"none","paddingTop":0,"id":"label4056","backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"paddingLeft":0,"fontFamily":"Arial","paddingRight":0,"text":trans('label4056.text'),"propagateClick":false,"top":17,"fontColor":"#FFFFFF","verticalAlign":"middle","toolTipHorizontalAlign":"center","height":50,"maxHeight":50,"fontSize":30,"maxWidth":280,"fontStyle":"normal","borderRadius":0,"borderSize":0,"shadow":false,"fontWeight":"bold","minHeight":50,"right":"0.47%"},{"hfov":360,"class":"Panorama","hfovMin":"135%","frames":[{"stereoCube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":24576,"rowCount":4,"url":"media/panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":48},{"tags":"ondemand","width":12288,"rowCount":2,"url":"media/panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":24},{"tags":"mobilevr2gen","width":24576,"rowCount":1,"url":"media/panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87_t.jpg"}],"vfov":180,"pitch":0,"id":"panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87","partial":false,"label":trans('panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87.label'),"thumbnailUrl":"media/panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87_t.jpg","hfovMax":130,"overlays":["this.overlay_E3012DDE_ECD9_CB85_41C7_9CBB0970BCCC","this.overlay_FC9A0759_ECD9_B88C_41DD_AC5D74748E23"],"data":{"label":"T3xMUUTO Vue 3"},"adjacentPanoramas":[{"panorama":"this.panorama_FAA6E428_ECEE_A32D_41E5_A6DE83167453","distance":85.82,"yaw":-90.43,"select":"this.overlay_E3012DDE_ECD9_CB85_41C7_9CBB0970BCCC.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","data":{"overlayID":"overlay_E3012DDE_ECD9_CB85_41C7_9CBB0970BCCC"},"backwardYaw":61},{"panorama":"this.panorama_FBE2592D_ECEE_E527_41E8_96D516D02422","distance":32.74,"yaw":-50.93,"select":"this.overlay_FC9A0759_ECD9_B88C_41DD_AC5D74748E23.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","data":{"overlayID":"overlay_FC9A0759_ECD9_B88C_41DD_AC5D74748E23"},"backwardYaw":127.43}]},{"class":"PanoramaCamera","hoverFactor":0,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"id":"panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87_camera"},{"hfov":360,"class":"Panorama","hfovMin":"135%","frames":[{"stereoCube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":24576,"rowCount":4,"url":"media/panorama_FBE2592D_ECEE_E527_41E8_96D516D02422_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":48},{"tags":"ondemand","width":12288,"rowCount":2,"url":"media/panorama_FBE2592D_ECEE_E527_41E8_96D516D02422_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":24},{"tags":"mobilevr2gen","width":24576,"rowCount":1,"url":"media/panorama_FBE2592D_ECEE_E527_41E8_96D516D02422_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_FBE2592D_ECEE_E527_41E8_96D516D02422_t.jpg"}],"vfov":180,"pitch":0,"id":"panorama_FBE2592D_ECEE_E527_41E8_96D516D02422","partial":false,"label":trans('panorama_FBE2592D_ECEE_E527_41E8_96D516D02422.label'),"thumbnailUrl":"media/panorama_FBE2592D_ECEE_E527_41E8_96D516D02422_t.jpg","hfovMax":130,"overlays":["this.overlay_E3B568BD_ECD7_C987_41E1_E4C8C2B77F76","this.overlay_E3C23655_ECD6_5887_41EB_341A5D74F5F3","this.overlay_FC5F0EF1_ECDE_C99F_41CB_96DE0D0F882A"],"data":{"label":"T3xMUUTO Vue 1"},"adjacentPanoramas":[{"panorama":"this.panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87","distance":15.22,"yaw":127.43,"select":"this.overlay_E3C23655_ECD6_5887_41EB_341A5D74F5F3.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","data":{"overlayID":"overlay_E3C23655_ECD6_5887_41EB_341A5D74F5F3"},"backwardYaw":-50.93},{"panorama":"this.panorama_FB2D0554_ECEF_AD64_41EA_0863473C663C","distance":44.59,"yaw":89.26,"select":"this.overlay_E3B568BD_ECD7_C987_41E1_E4C8C2B77F76.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","data":{"overlayID":"overlay_E3B568BD_ECD7_C987_41E1_E4C8C2B77F76"},"backwardYaw":46.1},{"panorama":"this.panorama_FAA6E428_ECEE_A32D_41E5_A6DE83167453","distance":26.2,"yaw":-168.83,"select":"this.overlay_FC5F0EF1_ECDE_C99F_41CB_96DE0D0F882A.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","data":{"overlayID":"overlay_FC5F0EF1_ECDE_C99F_41CB_96DE0D0F882A"}}]},{"itemThumbnailShadowOpacity":0.54,"minWidth":20,"gap":10,"itemLabelTextDecoration":"none","class":"ThumbnailList","right":"0.12%","minHeight":20,"itemThumbnailShadowBlurRadius":8,"itemLabelGap":9,"itemLabelFontFamily":"Arial","itemMode":"normal","itemLabelPosition":"bottom","itemLabelHorizontalAlign":"center","paddingTop":10,"rollOverItemLabelFontWeight":"normal","backgroundOpacity":0,"horizontalAlign":"left","itemBackgroundColor":[],"paddingBottom":10,"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","data":{"name":"ThumbnailList35762"},"itemLabelFontColor":"#FFFFFF","itemHorizontalAlign":"center","itemThumbnailShadow":true,"itemThumbnailShadowHorizontalLength":3,"paddingRight":20,"itemBorderRadius":0,"paddingLeft":20,"propagateClick":false,"itemThumbnailWidth":75,"playList":"this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist","itemPaddingLeft":3,"scrollBarMargin":2,"verticalAlign":"top","bottom":"0.02%","itemBackgroundOpacity":0,"itemLabelFontSize":14,"itemPaddingTop":3,"itemOpacity":1,"itemThumbnailScaleMode":"fit_outside","scrollBarOpacity":0.5,"itemLabelFontWeight":"normal","toolTipHorizontalAlign":"center","layout":"horizontal","itemBackgroundColorDirection":"vertical","height":135.02,"selectedItemLabelFontColor":"#FFCC00","itemPaddingRight":3,"scrollBarWidth":10,"itemThumbnailShadowColor":"#000000","scrollBarVisible":"rollOver","itemThumbnailBorderRadius":50,"itemBackgroundColorRatios":[],"rollOverItemBackgroundOpacity":0,"scrollBarColor":"#FFFFFF","left":"0.01%","selectedItemLabelFontWeight":"bold","itemVerticalAlign":"middle","borderRadius":5,"itemThumbnailShadowVerticalLength":3,"itemThumbnailOpacity":1,"itemThumbnailShadowSpread":1,"itemLabelFontStyle":"normal","itemPaddingBottom":3,"shadow":false,"itemThumbnailHeight":75,"borderSize":0},{"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"shadow":false,"class":"ViewerArea","playbackBarHeadOpacity":1,"displayTooltipInSurfaceSelection":true,"toolTipFontFamily":"Arial","playbackBarBorderSize":2,"toolTipShadowBlurRadius":3,"playbackBarBorderRadius":4,"playbackBarHeight":20,"playbackBarProgressBorderColor":"#000000","vrPointerColor":"#FFFFFF","id":"MainViewer","subtitlesHorizontalAlign":"center","subtitlesVerticalAlign":"bottom","toolTipShadowOpacity":1,"paddingLeft":0,"data":{"name":"Main Viewer"},"subtitlesEnabled":true,"playbackBarHeadWidth":6,"progressBackgroundColorRatios":[0,1],"toolTipBorderRadius":3,"paddingRight":0,"toolTipBackgroundColor":"#999999","progressRight":10,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipFontSize":12,"playbackBarHeadShadow":true,"subtitlesPaddingLeft":5,"toolTipTextShadowColor":"#666666","progressBarBackgroundColorDirection":"vertical","playbackBarHeadBorderSize":0,"progressOpacity":1,"transitionMode":"blending","toolTipBorderColor":"#767676","playbackBarHeadShadowBlurRadius":3,"progressBarBackgroundColorRatios":[0,1],"progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","playbackBarBottom":10,"toolTipHorizontalAlign":"center","playbackBarHeadShadowVerticalLength":0,"translationTransitionDuration":1000,"playbackBarProgressBackgroundColor":["#222222","#444444"],"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","playbackBarProgressBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"progressBorderColor":"#AAAAAA","subtitlesPaddingRight":5,"subtitlesTop":0,"progressBarBackgroundColor":["#222222","#444444"],"subtitlesBottom":50,"progressBackgroundOpacity":1,"playbackBarHeadHeight":30,"subtitlesShadow":false,"toolTipPaddingLeft":6,"toolTipShadowVerticalLength":0,"playbackBarHeadBorderRadius":0,"progressBackgroundColor":["#EEEEEE","#CCCCCC"],"subtitlesPaddingTop":5,"subtitlesPaddingBottom":5,"doubleClickAction":"toggle_fullscreen","progressBarOpacity":1,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadowColor":"#000000","minWidth":100,"borderSize":0,"playbackBarBackgroundOpacity":1,"subtitlesBorderColor":"#FFFFFF","progressBottom":1,"progressHeight":20,"minHeight":50,"subtitlesTextShadowBlurRadius":0,"toolTipFontStyle":"normal","toolTipShadowSpread":0,"displayTooltipInTouchScreens":true,"toolTipPaddingRight":6,"progressBarBorderRadius":4,"subtitlesFontWeight":"normal","progressBorderSize":2,"playbackBarProgressBackgroundColorRatios":[0,1],"toolTipTextShadowOpacity":0,"subtitlesTextDecoration":"none","playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesFontFamily":"Arial","paddingTop":0,"toolTipFontWeight":"normal","toolTipTextShadowBlurRadius":3,"playbackBarProgressOpacity":1,"paddingBottom":0,"firstTransitionDuration":0,"surfaceReticleColor":"#FFFFFF","toolTipFontColor":"#606060","subtitlesTextShadowOpacity":1,"progressBarBorderSize":0,"vrPointerSelectionColor":"#FF0000","transitionDuration":500,"propagateClick":false,"progressBorderRadius":4,"toolTipPaddingBottom":4,"top":0,"surfaceReticleOpacity":0.6,"vrPointerSelectionTime":1500,"toolTipShadowHorizontalLength":0,"bottom":0,"progressLeft":10,"subtitlesBorderSize":0,"playbackBarOpacity":1,"subtitlesFontColor":"#FFFFFF","toolTipShadowColor":"#333333","playbackBarHeadBorderColor":"#000000","surfaceReticleSelectionOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesOpacity":1,"playbackBarLeft":0,"playbackBarHeadShadowHorizontalLength":0,"toolTipBorderSize":1,"surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingTop":4,"toolTipDisplayTime":600,"playbackBarRight":0,"toolTipOpacity":0.5,"playbackBarBackgroundColorDirection":"vertical","left":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadBackgroundColorRatios":[0,1],"borderRadius":0,"subtitlesBackgroundColor":"#000000","right":0,"playbackBarProgressBorderRadius":0,"subtitlesGap":0,"playbackBarBorderColor":"#AAAAAA"},{"minWidth":60,"class":"Container","data":{"name":"-button set"},"width":85,"gap":3,"paddingTop":0,"id":"Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F","backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"propagateClick":true,"top":"14.6%","scrollBarMargin":2,"verticalAlign":"top","overflow":"scroll","scrollBarOpacity":0.5,"children":["this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137"],"toolTipHorizontalAlign":"center","contentOpaque":false,"height":320,"creationPolicy":"inAdvance","layout":"vertical","scrollBarWidth":10,"scrollBarVisible":"rollOver","maxHeight":320,"maxWidth":60,"scrollBarColor":"#000000","borderRadius":0,"borderSize":0,"shadow":false,"minHeight":320,"right":"0%"},{"items":[{"player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","camera":"this.panorama_FBE2592D_ECEE_E527_41E8_96D516D02422_camera","media":"this.panorama_FBE2592D_ECEE_E527_41E8_96D516D02422"},{"player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem","camera":"this.panorama_FB2D0554_ECEF_AD64_41EA_0863473C663C_camera","media":"this.panorama_FB2D0554_ECEF_AD64_41EA_0863473C663C"},{"player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","class":"PanoramaPlayListItem","camera":"this.panorama_FAA6E428_ECEE_A32D_41E5_A6DE83167453_camera","media":"this.panorama_FAA6E428_ECEE_A32D_41E5_A6DE83167453"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87_camera","class":"PanoramaPlayListItem","media":"this.panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"class":"PanoramaCamera","hoverFactor":0,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"id":"panorama_FAA6E428_ECEE_A32D_41E5_A6DE83167453_camera"},{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_FBE2592D_ECEE_E527_41E8_96D516D02422_camera","class":"PanoramaPlayListItem","media":"this.panorama_FBE2592D_ECEE_E527_41E8_96D516D02422"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_FB2D0554_ECEF_AD64_41EA_0863473C663C_camera","class":"PanoramaPlayListItem","media":"this.panorama_FB2D0554_ECEF_AD64_41EA_0863473C663C"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_FAA6E428_ECEE_A32D_41E5_A6DE83167453_camera","class":"PanoramaPlayListItem","media":"this.panorama_FAA6E428_ECEE_A32D_41E5_A6DE83167453"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87_camera","class":"PanoramaPlayListItem","media":"this.panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87"}],"class":"PlayList","id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist"},{"minWidth":80,"borderRadius":0,"class":"Image","data":{"name":"Image4995"},"width":80,"cursor":"hand","paddingTop":0,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","backgroundOpacity":0,"horizontalAlign":"left","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"propagateClick":true,"top":21.17,"verticalAlign":"top","toolTipHorizontalAlign":"center","height":85,"click":"this.openLink(this.translate('LinkBehaviour_A4D1DCCC_BF24_0354_41BC_7B57F239723C.source'), '_blank')","maxHeight":80,"maxWidth":80,"left":26.3,"borderSize":0,"shadow":false,"minHeight":80,"scaleMode":"fill"},{"minWidth":60,"borderRadius":0,"class":"IconButton","data":{"name":"image button menu"},"width":60,"cursor":"hand","paddingTop":0,"pressedIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed.png","id":"IconButton_AC819C46_BF7C_0354_415E_028207B038AC","backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"propagateClick":true,"top":"6.78%","verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, null, false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, null, false)}.bind(this); if(!this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F.get('visible')){ visibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) } else { invisibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) }","transparencyActive":true,"iconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC.png","maxHeight":60,"maxWidth":60,"mode":"toggle","borderSize":0,"shadow":false,"minHeight":60,"right":"0.05%"},{"minWidth":60,"class":"IconButton","data":{"name":"IconButton FULLSCREEN"},"width":60,"cursor":"hand","paddingTop":0,"pressedIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed.png","backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","paddingRight":0,"paddingLeft":0,"propagateClick":true,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"transparencyActive":true,"iconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF.png","maxHeight":60,"maxWidth":60,"mode":"toggle","borderRadius":0,"borderSize":0,"shadow":false,"minHeight":60},{"hfov":360,"class":"Panorama","hfovMin":"150%","frames":[{"stereoCube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":24576,"rowCount":4,"url":"media/panorama_FAA6E428_ECEE_A32D_41E5_A6DE83167453_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":48},{"tags":"ondemand","width":12288,"rowCount":2,"url":"media/panorama_FAA6E428_ECEE_A32D_41E5_A6DE83167453_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":24},{"tags":"mobilevr2gen","width":24576,"rowCount":1,"url":"media/panorama_FAA6E428_ECEE_A32D_41E5_A6DE83167453_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_FAA6E428_ECEE_A32D_41E5_A6DE83167453_t.jpg"}],"vfov":180,"pitch":0,"id":"panorama_FAA6E428_ECEE_A32D_41E5_A6DE83167453","partial":false,"label":trans('panorama_FAA6E428_ECEE_A32D_41E5_A6DE83167453.label'),"thumbnailUrl":"media/panorama_FAA6E428_ECEE_A32D_41E5_A6DE83167453_t.jpg","hfovMax":130,"overlays":["this.overlay_E3F73A70_ECDA_C89D_41E3_5DF4CBCB4455","this.overlay_FCC8BB97_ECDA_CF84_41C6_53DDF3E23358"],"data":{"label":"T3xMUUTO Vue 2"},"adjacentPanoramas":[{"panorama":"this.panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87","distance":32,"yaw":61,"select":"this.overlay_FCC8BB97_ECDA_CF84_41C6_53DDF3E23358.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","data":{"overlayID":"overlay_FCC8BB97_ECDA_CF84_41C6_53DDF3E23358"},"backwardYaw":-90.43}]},{"minWidth":60,"class":"IconButton","data":{"name":"IconButton VR"},"width":60,"cursor":"hand","paddingTop":0,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","paddingRight":0,"paddingLeft":0,"propagateClick":true,"verticalAlign":"middle","toolTipHorizontalAlign":"center","height":60,"transparencyActive":true,"iconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89.png","maxHeight":60,"maxWidth":60,"mode":"push","rollOverIconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89_rollover.png","borderRadius":0,"borderSize":0,"shadow":false,"minHeight":60},{"minWidth":60,"class":"IconButton","data":{"name":"IconButton FB"},"width":60,"cursor":"hand","paddingTop":0,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137","paddingRight":0,"paddingLeft":0,"propagateClick":true,"verticalAlign":"middle","toolTipHorizontalAlign":"center","height":60,"click":"this.openLink(this.translate('LinkBehaviour_A99CB470_BF24_034B_41D8_32775ADC450A.source'), '_blank')","transparencyActive":true,"iconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137.png","maxHeight":60,"maxWidth":60,"mode":"push","rollOverIconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137_rollover.png","borderRadius":0,"borderSize":0,"shadow":false,"minHeight":1},{"class":"PanoramaCamera","hoverFactor":0,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"id":"panorama_FB2D0554_ECEF_AD64_41EA_0863473C663C_camera"},{"minWidth":60,"class":"IconButton","data":{"name":"IconButton GYRO"},"width":60,"cursor":"hand","paddingTop":0,"pressedIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed.png","backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","paddingRight":0,"paddingLeft":0,"propagateClick":true,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"transparencyActive":true,"iconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464.png","maxHeight":60,"maxWidth":60,"mode":"toggle","borderRadius":0,"borderSize":0,"shadow":false,"minHeight":60},{"hfov":360,"class":"Panorama","hfovMin":"135%","vfov":89.99,"frames":[{"cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":21504,"rowCount":7,"url":"media/panorama_FB2D0554_ECEF_AD64_41EA_0863473C663C_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":3584,"colCount":42},{"tags":"ondemand","width":12288,"rowCount":4,"url":"media/panorama_FB2D0554_ECEF_AD64_41EA_0863473C663C_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":24},{"tags":"ondemand","width":6144,"rowCount":2,"url":"media/panorama_FB2D0554_ECEF_AD64_41EA_0863473C663C_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12},{"tags":"mobilevr2gen","width":12288,"rowCount":1,"url":"media/panorama_FB2D0554_ECEF_AD64_41EA_0863473C663C_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":6}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_FB2D0554_ECEF_AD64_41EA_0863473C663C_t.jpg"}],"pitch":0,"id":"panorama_FB2D0554_ECEF_AD64_41EA_0863473C663C","partial":false,"label":trans('panorama_FB2D0554_ECEF_AD64_41EA_0863473C663C.label'),"thumbnailUrl":"media/panorama_FB2D0554_ECEF_AD64_41EA_0863473C663C_t.jpg","hfovMax":130,"overlays":["this.overlay_E15A169F_ECD6_5983_41B3_6E1AE3B7E3F0"],"data":{"label":"T3xMUUTO Vue 4"},"adjacentPanoramas":[{"panorama":"this.panorama_FBE2592D_ECEE_E527_41E8_96D516D02422","distance":100,"yaw":46.1,"select":"this.overlay_E15A169F_ECD6_5983_41B3_6E1AE3B7E3F0.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","data":{"overlayID":"overlay_E15A169F_ECD6_5983_41B3_6E1AE3B7E3F0"},"backwardYaw":89.26}]},{"surfaceSelectionEnabled":false,"class":"PanoramaPlayer","buttonToggleHotspots":"this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","gyroscopeEnabled":true,"viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"zoomEnabled":true,"buttonToggleGyroscope":"this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","aaEnabled":true,"touchControlMode":"drag_rotation","arrowKeysAction":"translate","buttonCardboardView":"this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89"},{"class":"PanoramaCamera","hoverFactor":0,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"id":"panorama_FBE2592D_ECEE_E527_41E8_96D516D02422_camera"},{"minWidth":60,"class":"IconButton","data":{"name":"IconButton HS "},"width":60,"cursor":"hand","paddingTop":0,"pressedIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed.png","backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","paddingRight":0,"paddingLeft":0,"propagateClick":true,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"transparencyActive":true,"iconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628.png","maxHeight":60,"maxWidth":60,"mode":"toggle","borderRadius":0,"borderSize":0,"shadow":false,"minHeight":60},{"items":[{"hfov":6,"distance":50,"yaw":-90.43,"class":"HotspotPanoramaOverlayImage","image":"this.res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E","horizontalAlign":"center","vfov":6,"verticalAlign":"middle","pitch":-1.12,"data":{"label":"link"},"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_E23C2E3A_ECD9_C88D_41BF_61561957DEA8"],"data":{"label":"link","hasPanoramaAction":true},"id":"overlay_E3012DDE_ECD9_CB85_41C7_9CBB0970BCCC"},{"items":[{"hfov":6,"distance":50,"yaw":-50.93,"class":"HotspotPanoramaOverlayImage","image":"this.res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E","horizontalAlign":"center","vfov":6,"verticalAlign":"middle","pitch":-2.96,"data":{"label":"link"},"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_FC96776F_ECD9_B883_41E9_421DC79ECB41"],"data":{"label":"link","hasPanoramaAction":true},"id":"overlay_FC9A0759_ECD9_B88C_41DD_AC5D74748E23"},{"items":[{"hfov":6,"distance":50,"yaw":89.26,"class":"HotspotPanoramaOverlayImage","image":"this.res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E","horizontalAlign":"center","vfov":6,"verticalAlign":"middle","pitch":-2.17,"data":{"label":"link"},"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_E2D91925_ECD7_C887_41DC_ADEC7D1D8270"],"data":{"label":"link","hasPanoramaAction":true},"id":"overlay_E3B568BD_ECD7_C987_41E1_E4C8C2B77F76"},{"items":[{"hfov":6,"distance":50,"yaw":127.43,"class":"HotspotPanoramaOverlayImage","image":"this.res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E","horizontalAlign":"center","vfov":6,"verticalAlign":"middle","pitch":-6.36,"data":{"label":"link"},"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_E3F48658_ECD6_588D_41EC_07BA8BB65ED3"],"data":{"label":"link","hasPanoramaAction":true},"id":"overlay_E3C23655_ECD6_5887_41EB_341A5D74F5F3"},{"items":[{"hfov":6,"distance":50,"yaw":-168.83,"class":"HotspotPanoramaOverlayImage","image":"this.res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E","horizontalAlign":"center","vfov":6,"verticalAlign":"middle","pitch":-3.7,"data":{"label":"link"},"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_FC5CCEF3_ECDE_C983_41D0_B3DB09D647D5"],"data":{"label":"link","hasPanoramaAction":true},"id":"overlay_FC5F0EF1_ECDE_C99F_41CB_96DE0D0F882A"},{"data":{"label":"link"},"areas":["this.HotspotPanoramaOverlayArea_E274CAC7_ECDA_C983_41D0_7EDF60FB19EE"],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"items":[{"hfov":6,"distance":50,"yaw":7.76,"class":"HotspotPanoramaOverlayImage","image":"this.res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E","horizontalAlign":"center","vfov":6,"verticalAlign":"middle","pitch":-3.79,"data":{"label":"link"},"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","id":"overlay_E3F73A70_ECDA_C89D_41E3_5DF4CBCB4455"},{"items":[{"hfov":6,"distance":50,"yaw":61,"class":"HotspotPanoramaOverlayImage","image":"this.res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E","horizontalAlign":"center","vfov":6,"verticalAlign":"middle","pitch":-3.03,"data":{"label":"link"},"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_FCCD0BA4_ECDA_CF85_41C6_964FE8375C48"],"data":{"label":"link","hasPanoramaAction":true},"id":"overlay_FCC8BB97_ECDA_CF84_41C6_53DDF3E23358"},{"data":{"label":"link"},"areas":["this.HotspotPanoramaOverlayArea_E1564739_ECD6_588C_41DA_022481B4F0ED"],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"items":[{"hfov":6,"distance":50,"yaw":46.1,"class":"HotspotPanoramaOverlayImage","image":"this.res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E","horizontalAlign":"center","vfov":6,"verticalAlign":"middle","pitch":0.01,"data":{"label":"link"},"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","id":"overlay_E15A169F_ECD6_5983_41B3_6E1AE3B7E3F0"},{"id":"res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E","class":"ImageResource","levels":[{"height":200,"width":200,"url":"media/res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E_0.png","class":"ImageResourceLevel"}]},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_E23C2E3A_ECD9_C88D_41BF_61561957DEA8"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_FC96776F_ECD9_B883_41E9_421DC79ECB41"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_E2D91925_ECD7_C887_41DC_ADEC7D1D8270"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 3)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_E3F48658_ECD6_588D_41EC_07BA8BB65ED3"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_FC5CCEF3_ECDE_C983_41D0_B3DB09D647D5"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_E274CAC7_ECDA_C983_41D0_7EDF60FB19EE"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 3)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_FCCD0BA4_ECDA_CF85_41C6_964FE8375C48"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_E1564739_ECD6_588C_41DA_022481B4F0ED"}],"mobileMipmappingEnabled":false,"paddingRight":0,"defaultVRPointer":"gaze","propagateClick":false,"scrollBarMargin":2,"verticalAlign":"top","scripts":{"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizFinish":TDV.Tour.Script.quizFinish,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizStart":TDV.Tour.Script.quizStart,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"registerKey":TDV.Tour.Script.registerKey,"getComponentByName":TDV.Tour.Script.getComponentByName,"showWindow":TDV.Tour.Script.showWindow,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"playAudioList":TDV.Tour.Script.playAudioList,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getKey":TDV.Tour.Script.getKey,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"openLink":TDV.Tour.Script.openLink,"clone":TDV.Tour.Script.clone,"initAnalytics":TDV.Tour.Script.initAnalytics,"init":TDV.Tour.Script.init,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"initQuiz":TDV.Tour.Script.initQuiz,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"existsKey":TDV.Tour.Script.existsKey,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"shareSocial":TDV.Tour.Script.shareSocial,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"resumePlayers":TDV.Tour.Script.resumePlayers,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getMainViewer":TDV.Tour.Script.getMainViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"cloneCamera":TDV.Tour.Script.cloneCamera,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"mixObject":TDV.Tour.Script.mixObject,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setValue":TDV.Tour.Script.setValue,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPixels":TDV.Tour.Script.getPixels,"getOverlays":TDV.Tour.Script.getOverlays,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setLocale":TDV.Tour.Script.setLocale,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"unregisterKey":TDV.Tour.Script.unregisterKey,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"historyGoBack":TDV.Tour.Script.historyGoBack,"downloadFile":TDV.Tour.Script.downloadFile,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"isPanorama":TDV.Tour.Script.isPanorama,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"translate":TDV.Tour.Script.translate,"textToSpeech":TDV.Tour.Script.textToSpeech,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo},"overflow":"hidden","downloadEnabled":false,"scrollBarOpacity":0.5,"mouseWheelEnabled":true,"backgroundColor":["#000000"],"contentOpaque":false,"height":"100%","children":["this.MainViewer","this.label4056","this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.IconButton_AC819C46_BF7C_0354_415E_028207B038AC","this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F"],"toolTipHorizontalAlign":"center","backgroundPreloadEnabled":true,"scrollBarWidth":10,"scrollBarVisible":"rollOver","creationPolicy":"inAdvance","scrollBarColor":"#000000","desktopMipmappingEnabled":false,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89,this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464], 'cardboardAvailable'); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF].forEach(function(component) { component.set('visible', false); }) }","layout":"absolute","borderSize":0,"shadow":false,"minHeight":20,"data":{"name":"Player28156","locales":{"fr":"locale/fr.txt"},"defaultLocale":"fr","initialScale":0.65,"textToSpeechConfig":{"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"pitch":1,"rate":1}}};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Thu Jun 6 2024