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
    var d = {"scrollBarVisible":"rollOver","backgroundColorDirection":"vertical","class":"Player","scrollBarColor":"#000000","toolTipHorizontalAlign":"center","backgroundColorRatios":[0],"scrollBarWidth":10,"width":"100%","gap":10,"backgroundOpacity":1,"vrPolyfillScale":1,"paddingTop":0,"mouseWheelEnabled":true,"horizontalAlign":"left","propagateClick":false,"paddingLeft":0,"id":"rootPlayer","downloadEnabled":false,"overflow":"hidden","paddingRight":0,"paddingBottom":0,"verticalAlign":"top","defaultVRPointer":"gaze","definitions": [{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"hoverFactor":0,"id":"panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87_camera"},{"class":"Panorama","hfovMin":"150%","vfov":180,"pitch":0,"id":"panorama_FD9DF061_ED77_553F_41AC_838291184160","hfovMax":130,"label":trans('panorama_FD9DF061_ED77_553F_41AC_838291184160.label'),"adjacentPanoramas":[{"distance":32.55,"yaw":9.35,"select":"this.overlay_FD3A1728_ED75_DB0D_41E0_36D742E7560C.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_FD3A1728_ED75_DB0D_41E0_36D742E7560C"},"class":"AdjacentPanorama","backwardYaw":-168.83,"panorama":"this.panorama_FBE2592D_ECEE_E527_41E8_96D516D02422"},{"distance":61.63,"yaw":68.49,"select":"this.overlay_FC8B8DA3_ED75_2F03_41C6_8CCAE570E9B4.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_FC8B8DA3_ED75_2F03_41C6_8CCAE570E9B4"},"class":"AdjacentPanorama","backwardYaw":-90.43,"panorama":"this.panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87"}],"hfov":360,"overlays":["this.overlay_FD3A1728_ED75_DB0D_41E0_36D742E7560C","this.overlay_FC8B8DA3_ED75_2F03_41C6_8CCAE570E9B4"],"thumbnailUrl":"media/panorama_FD9DF061_ED77_553F_41AC_838291184160_t.jpg","frames":[{"thumbnailUrl":"media/panorama_FD9DF061_ED77_553F_41AC_838291184160_t.jpg","stereoCube":{"class":"ImageResource","levels":[{"width":24576,"rowCount":4,"url":"media/panorama_FD9DF061_ED77_553F_41AC_838291184160_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":48,"tags":"ondemand"},{"width":12288,"rowCount":2,"url":"media/panorama_FD9DF061_ED77_553F_41AC_838291184160_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":24,"tags":"ondemand"},{"width":24576,"rowCount":1,"url":"media/panorama_FD9DF061_ED77_553F_41AC_838291184160_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12,"tags":"mobilevr2gen"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"T3xMUUTO Vue 2"},"partial":false},{"class":"IconButton","toolTipHorizontalAlign":"center","width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"horizontalAlign":"center","propagateClick":true,"paddingLeft":0,"iconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137.png","paddingRight":0,"paddingBottom":0,"id":"IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137","height":60,"verticalAlign":"middle","rollOverIconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137_rollover.png","click":"this.openLink(this.translate('LinkBehaviour_A99CB470_BF24_034B_41D8_32775ADC450A.source'), '_blank')","maxHeight":60,"borderRadius":0,"maxWidth":60,"mode":"push","minHeight":1,"data":{"name":"IconButton FB"},"transparencyActive":true,"minWidth":60,"shadow":false,"borderSize":0},{"class":"Panorama","hfovMin":"135%","vfov":180,"pitch":0,"id":"panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87","hfovMax":130,"label":trans('panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87.label'),"adjacentPanoramas":[{"distance":85.82,"yaw":-90.43,"select":"this.overlay_E3012DDE_ECD9_CB85_41C7_9CBB0970BCCC.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_E3012DDE_ECD9_CB85_41C7_9CBB0970BCCC"},"class":"AdjacentPanorama","backwardYaw":68.49,"panorama":"this.panorama_FD9DF061_ED77_553F_41AC_838291184160"},{"distance":32.74,"yaw":-50.93,"select":"this.overlay_FC9A0759_ECD9_B88C_41DD_AC5D74748E23.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_FC9A0759_ECD9_B88C_41DD_AC5D74748E23"},"class":"AdjacentPanorama","backwardYaw":127.43,"panorama":"this.panorama_FBE2592D_ECEE_E527_41E8_96D516D02422"}],"hfov":360,"overlays":["this.overlay_E3012DDE_ECD9_CB85_41C7_9CBB0970BCCC","this.overlay_FC9A0759_ECD9_B88C_41DD_AC5D74748E23"],"thumbnailUrl":"media/panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87_t.jpg","frames":[{"thumbnailUrl":"media/panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87_t.jpg","stereoCube":{"class":"ImageResource","levels":[{"width":24576,"rowCount":4,"url":"media/panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":48,"tags":"ondemand"},{"width":12288,"rowCount":2,"url":"media/panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":24,"tags":"ondemand"},{"width":24576,"rowCount":1,"url":"media/panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12,"tags":"mobilevr2gen"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"T3xMUUTO Vue 3"},"partial":false},{"scrollBarVisible":"rollOver","scrollBarColor":"#000000","class":"Container","toolTipHorizontalAlign":"center","scrollBarWidth":10,"width":85,"gap":3,"backgroundOpacity":0,"children":["this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137"],"paddingTop":0,"horizontalAlign":"center","propagateClick":true,"paddingLeft":0,"overflow":"scroll","top":"14.6%","paddingBottom":0,"id":"Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F","paddingRight":0,"scrollBarMargin":2,"height":320,"verticalAlign":"top","creationPolicy":"inAdvance","layout":"vertical","maxHeight":320,"borderRadius":0,"maxWidth":60,"contentOpaque":false,"minHeight":320,"right":"0%","scrollBarOpacity":0.5,"minWidth":60,"shadow":false,"borderSize":0,"data":{"name":"-button set"}},{"class":"IconButton","toolTipHorizontalAlign":"center","width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"horizontalAlign":"center","propagateClick":true,"paddingLeft":0,"iconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89.png","paddingRight":0,"paddingBottom":0,"id":"IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","height":60,"verticalAlign":"middle","rollOverIconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89_rollover.png","maxHeight":60,"borderRadius":0,"maxWidth":60,"mode":"push","minHeight":60,"data":{"name":"IconButton VR"},"transparencyActive":true,"minWidth":60,"shadow":false,"borderSize":0},{"class":"Label","textDecoration":"none","toolTipHorizontalAlign":"center","width":280,"backgroundOpacity":0,"paddingTop":0,"fontFamily":"Arial","horizontalAlign":"center","propagateClick":false,"fontSize":30,"paddingLeft":0,"top":17,"paddingBottom":0,"id":"label4056","paddingRight":0,"height":50,"verticalAlign":"middle","maxHeight":50,"fontColor":"#FFFFFF","borderRadius":0,"maxWidth":280,"fontStyle":"normal","text":trans('label4056.text'),"minHeight":50,"right":"0.47%","minWidth":280,"shadow":false,"fontWeight":"bold","borderSize":0,"data":{"name":"Label28174"}},{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_FBE2592D_ECEE_E527_41E8_96D516D02422_camera","class":"PanoramaPlayListItem","media":"this.panorama_FBE2592D_ECEE_E527_41E8_96D516D02422"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_FD9DF061_ED77_553F_41AC_838291184160_camera","class":"PanoramaPlayListItem","media":"this.panorama_FD9DF061_ED77_553F_41AC_838291184160"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87_camera","class":"PanoramaPlayListItem","media":"this.panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_F84265EE_ED1E_EEF0_41E7_A9D28399683C_camera","class":"PanoramaPlayListItem","media":"this.panorama_F84265EE_ED1E_EEF0_41E7_A9D28399683C"}],"class":"PlayList","id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist"},{"class":"Image","toolTipHorizontalAlign":"center","width":80,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","horizontalAlign":"left","propagateClick":true,"paddingBottom":0,"paddingLeft":0,"top":21.17,"id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","paddingRight":0,"height":85,"verticalAlign":"top","click":"this.openLink(this.translate('LinkBehaviour_A4D1DCCC_BF24_0354_41BC_7B57F239723C.source'), '_blank')","maxHeight":80,"borderRadius":0,"maxWidth":80,"left":26.3,"minHeight":80,"data":{"name":"Image4995"},"minWidth":80,"shadow":false,"borderSize":0,"scaleMode":"fill"},{"class":"IconButton","pressedIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed.png","toolTipHorizontalAlign":"center","width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"horizontalAlign":"center","propagateClick":true,"pressedRollOverIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed_rollover.png","paddingLeft":0,"iconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628.png","paddingRight":0,"paddingBottom":0,"id":"IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","height":60,"verticalAlign":"middle","maxHeight":60,"borderRadius":0,"maxWidth":60,"mode":"toggle","minHeight":60,"data":{"name":"IconButton HS "},"transparencyActive":true,"minWidth":60,"shadow":false,"borderSize":0},{"class":"IconButton","pressedIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed.png","toolTipHorizontalAlign":"center","width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"horizontalAlign":"center","propagateClick":true,"pressedRollOverIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed_rollover.png","paddingLeft":0,"iconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC.png","top":"6.78%","paddingBottom":0,"id":"IconButton_AC819C46_BF7C_0354_415E_028207B038AC","paddingRight":0,"height":60,"verticalAlign":"middle","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, null, false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, null, false)}.bind(this); if(!this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F.get('visible')){ visibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) } else { invisibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) }","maxHeight":60,"borderRadius":0,"maxWidth":60,"mode":"toggle","minHeight":60,"right":"0.05%","transparencyActive":true,"minWidth":60,"shadow":false,"borderSize":0,"data":{"name":"image button menu"}},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"hoverFactor":0,"id":"panorama_FBE2592D_ECEE_E527_41E8_96D516D02422_camera"},{"scrollBarVisible":"rollOver","shadow":false,"class":"ThumbnailList","left":"0.01%","itemThumbnailShadowColor":"#000000","scrollBarColor":"#FFFFFF","toolTipHorizontalAlign":"center","scrollBarWidth":10,"itemMode":"normal","gap":10,"backgroundOpacity":0,"selectedItemLabelFontWeight":"bold","itemThumbnailShadowVerticalLength":3,"itemThumbnailWidth":75,"paddingTop":10,"playList":"this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist","horizontalAlign":"left","propagateClick":false,"itemThumbnailShadowSpread":1,"itemBackgroundColorRatios":[],"itemLabelTextDecoration":"none","paddingBottom":10,"paddingLeft":20,"itemThumbnailOpacity":1,"rollOverItemBackgroundOpacity":0,"paddingRight":20,"rollOverItemLabelFontWeight":"normal","id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","bottom":"0.02%","itemThumbnailBorderRadius":50,"scrollBarMargin":2,"verticalAlign":"top","itemThumbnailShadowBlurRadius":8,"itemLabelFontStyle":"normal","itemLabelFontFamily":"Arial","height":135.02,"itemLabelHorizontalAlign":"center","itemPaddingBottom":3,"itemLabelFontColor":"#FFFFFF","itemThumbnailShadow":true,"itemBackgroundColor":[],"itemThumbnailShadowOpacity":0.54,"itemOpacity":1,"itemBackgroundOpacity":0,"layout":"horizontal","itemHorizontalAlign":"center","itemLabelPosition":"bottom","itemThumbnailScaleMode":"fit_outside","itemLabelFontWeight":"normal","itemPaddingTop":3,"itemPaddingRight":3,"selectedItemLabelFontColor":"#FFCC00","itemLabelFontSize":14,"itemThumbnailHeight":75,"scrollBarOpacity":0.5,"itemBorderRadius":0,"itemThumbnailShadowHorizontalLength":3,"itemPaddingLeft":3,"borderRadius":5,"borderSize":0,"data":{"name":"ThumbnailList35762"},"itemBackgroundColorDirection":"vertical","minWidth":20,"itemVerticalAlign":"middle","itemLabelGap":9,"minHeight":20,"right":"0.12%"},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"hoverFactor":0,"id":"panorama_FD9DF061_ED77_553F_41AC_838291184160_camera"},{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_FBE2592D_ECEE_E527_41E8_96D516D02422_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.panorama_FBE2592D_ECEE_E527_41E8_96D516D02422"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_FD9DF061_ED77_553F_41AC_838291184160_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","media":"this.panorama_FD9DF061_ED77_553F_41AC_838291184160"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","media":"this.panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_F84265EE_ED1E_EEF0_41E7_A9D28399683C_camera","class":"PanoramaPlayListItem","media":"this.panorama_F84265EE_ED1E_EEF0_41E7_A9D28399683C","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"class":"ViewerArea","vrPointerColor":"#FFFFFF","toolTipFontFamily":"Arial","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesShadow":false,"toolTipShadowVerticalLength":0,"playbackBarProgressOpacity":1,"subtitlesBottom":50,"toolTipFontStyle":"normal","toolTipBorderRadius":3,"data":{"name":"Main Viewer"},"toolTipShadowOpacity":1,"playbackBarProgressBackgroundColor":["#222222","#444444"],"progressBackgroundColorRatios":[0,1],"subtitlesTextShadowHorizontalLength":1,"paddingLeft":0,"toolTipShadowBlurRadius":3,"paddingRight":0,"progressRight":10,"id":"MainViewer","transitionMode":"blending","playbackBarProgressBackgroundColorDirection":"vertical","toolTipFontSize":12,"playbackBarHeadBorderColor":"#000000","progressOpacity":1,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0,1],"toolTipTextShadowColor":"#666666","subtitlesTop":0,"subtitlesHorizontalAlign":"center","progressBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"subtitlesTextShadowBlurRadius":0,"playbackBarProgressBackgroundColorRatios":[0,1],"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontFamily":"Arial","subtitlesFontSize":"3vmin","playbackBarHeadShadowOpacity":0.7,"subtitlesGap":0,"progressBorderColor":"#AAAAAA","subtitlesTextShadowColor":"#000000","displayTooltipInSurfaceSelection":true,"progressBarBackgroundColor":["#222222","#444444"],"subtitlesOpacity":1,"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"toolTipBorderColor":"#767676","playbackBarProgressBorderSize":0,"toolTipBackgroundColor":"#999999","toolTipFontWeight":"normal","playbackBarBorderSize":2,"playbackBarHeadBorderSize":0,"progressBarOpacity":1,"subtitlesBackgroundOpacity":0.2,"progressBackgroundColor":["#EEEEEE","#CCCCCC"],"doubleClickAction":"toggle_fullscreen","progressBottom":1,"subtitlesBorderSize":0,"subtitlesPaddingBottom":5,"minHeight":50,"subtitlesBorderColor":"#FFFFFF","playbackBarBottom":10,"progressHeight":20,"borderSize":0,"progressBorderSize":2,"translationTransitionDuration":1000,"subtitlesTextDecoration":"none","minWidth":100,"progressBarBorderRadius":4,"playbackBarHeadShadowBlurRadius":3,"progressBackgroundOpacity":1,"progressBarBorderSize":0,"subtitlesTextShadowOpacity":1,"toolTipHorizontalAlign":"center","toolTipTextShadowOpacity":0,"playbackBarOpacity":1,"playbackBarBackgroundColorDirection":"vertical","toolTipPaddingRight":6,"playbackBarHeight":20,"playbackBarRight":0,"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"subtitlesPaddingTop":5,"playbackBarBorderColor":"#AAAAAA","paddingTop":0,"playbackBarBorderRadius":4,"playbackBarHeadBackgroundColor":["#111111","#666666"],"propagateClick":false,"transitionDuration":500,"toolTipShadowSpread":0,"toolTipFontColor":"#606060","subtitlesPaddingRight":5,"progressBorderRadius":4,"progressLeft":10,"surfaceReticleOpacity":0.6,"paddingBottom":0,"playbackBarBackgroundOpacity":1,"toolTipPaddingBottom":4,"playbackBarProgressBorderColor":"#000000","displayTooltipInTouchScreens":true,"surfaceReticleSelectionColor":"#FFFFFF","top":0,"toolTipShadowHorizontalLength":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadHeight":30,"bottom":0,"toolTipTextShadowBlurRadius":3,"subtitlesFontWeight":"normal","surfaceReticleSelectionOpacity":1,"playbackBarHeadShadowColor":"#000000","toolTipPaddingLeft":6,"subtitlesFontColor":"#FFFFFF","toolTipShadowColor":"#333333","firstTransitionDuration":0,"vrPointerSelectionTime":1500,"playbackBarProgressBorderRadius":0,"subtitlesVerticalAlign":"bottom","playbackBarHeadShadowHorizontalLength":0,"toolTipBorderSize":1,"playbackBarHeadShadow":true,"toolTipPaddingTop":4,"toolTipDisplayTime":600,"playbackBarHeadBorderRadius":0,"toolTipOpacity":0.5,"vrPointerSelectionColor":"#FF0000","borderRadius":0,"left":0,"subtitlesPaddingLeft":5,"playbackBarLeft":0,"right":0,"subtitlesEnabled":true,"shadow":false,"playbackBarHeadOpacity":1,"playbackBarHeadShadowVerticalLength":0},{"buttonToggleHotspots":"this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","buttonCardboardView":"this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","viewerArea":"this.MainViewer","buttonToggleGyroscope":"this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","aaEnabled":true,"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","class":"PanoramaPlayer","surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","zoomEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"gyroscopeEnabled":true,"displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer"},{"class":"Panorama","hfovMin":"150%","vfov":180,"pitch":0,"id":"panorama_F84265EE_ED1E_EEF0_41E7_A9D28399683C","hfovMax":130,"label":trans('panorama_F84265EE_ED1E_EEF0_41E7_A9D28399683C.label'),"adjacentPanoramas":[{"distance":53.3,"yaw":-88.23,"select":"this.overlay_FB1C8101_ED1F_2731_41BB_1EC11C7472A2.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_FB1C8101_ED1F_2731_41BB_1EC11C7472A2"},"class":"AdjacentPanorama","backwardYaw":89.26,"panorama":"this.panorama_FBE2592D_ECEE_E527_41E8_96D516D02422"}],"hfov":360,"overlays":["this.overlay_FB1C8101_ED1F_2731_41BB_1EC11C7472A2"],"thumbnailUrl":"media/panorama_F84265EE_ED1E_EEF0_41E7_A9D28399683C_t.jpg","frames":[{"thumbnailUrl":"media/panorama_F84265EE_ED1E_EEF0_41E7_A9D28399683C_t.jpg","stereoCube":{"class":"ImageResource","levels":[{"width":24576,"rowCount":4,"url":"media/panorama_F84265EE_ED1E_EEF0_41E7_A9D28399683C_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":48,"tags":"ondemand"},{"width":12288,"rowCount":2,"url":"media/panorama_F84265EE_ED1E_EEF0_41E7_A9D28399683C_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":24,"tags":"ondemand"},{"width":24576,"rowCount":1,"url":"media/panorama_F84265EE_ED1E_EEF0_41E7_A9D28399683C_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12,"tags":"mobilevr2gen"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"T3xMUUTO Vue 4"},"partial":false},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"hoverFactor":0,"id":"panorama_F84265EE_ED1E_EEF0_41E7_A9D28399683C_camera"},{"class":"IconButton","pressedIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed.png","toolTipHorizontalAlign":"center","width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"horizontalAlign":"center","propagateClick":true,"pressedRollOverIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed_rollover.png","paddingLeft":0,"iconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF.png","paddingRight":0,"paddingBottom":0,"id":"IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","height":60,"verticalAlign":"middle","maxHeight":60,"borderRadius":0,"maxWidth":60,"mode":"toggle","minHeight":60,"data":{"name":"IconButton FULLSCREEN"},"transparencyActive":true,"minWidth":60,"shadow":false,"borderSize":0},{"class":"Panorama","hfovMin":"135%","vfov":180,"pitch":0,"id":"panorama_FBE2592D_ECEE_E527_41E8_96D516D02422","hfovMax":130,"label":trans('panorama_FBE2592D_ECEE_E527_41E8_96D516D02422.label'),"adjacentPanoramas":[{"distance":44.59,"yaw":89.26,"select":"this.overlay_E3B568BD_ECD7_C987_41E1_E4C8C2B77F76.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_E3B568BD_ECD7_C987_41E1_E4C8C2B77F76"},"class":"AdjacentPanorama","backwardYaw":-88.23,"panorama":"this.panorama_F84265EE_ED1E_EEF0_41E7_A9D28399683C"},{"distance":26.2,"yaw":-168.83,"select":"this.overlay_FC5F0EF1_ECDE_C99F_41CB_96DE0D0F882A.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_FC5F0EF1_ECDE_C99F_41CB_96DE0D0F882A"},"class":"AdjacentPanorama","backwardYaw":9.35,"panorama":"this.panorama_FD9DF061_ED77_553F_41AC_838291184160"},{"distance":15.22,"yaw":127.43,"select":"this.overlay_E3C23655_ECD6_5887_41EB_341A5D74F5F3.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_E3C23655_ECD6_5887_41EB_341A5D74F5F3"},"class":"AdjacentPanorama","backwardYaw":-50.93,"panorama":"this.panorama_FAA6DB9B_ECEE_A5EC_41EC_E3BF5DDCBA87"}],"hfov":360,"overlays":["this.overlay_E3B568BD_ECD7_C987_41E1_E4C8C2B77F76","this.overlay_E3C23655_ECD6_5887_41EB_341A5D74F5F3","this.overlay_FC5F0EF1_ECDE_C99F_41CB_96DE0D0F882A"],"thumbnailUrl":"media/panorama_FBE2592D_ECEE_E527_41E8_96D516D02422_t.jpg","frames":[{"thumbnailUrl":"media/panorama_FBE2592D_ECEE_E527_41E8_96D516D02422_t.jpg","stereoCube":{"class":"ImageResource","levels":[{"width":24576,"rowCount":4,"url":"media/panorama_FBE2592D_ECEE_E527_41E8_96D516D02422_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":48,"tags":"ondemand"},{"width":12288,"rowCount":2,"url":"media/panorama_FBE2592D_ECEE_E527_41E8_96D516D02422_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":24,"tags":"ondemand"},{"width":24576,"rowCount":1,"url":"media/panorama_FBE2592D_ECEE_E527_41E8_96D516D02422_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12,"tags":"mobilevr2gen"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"T3xMUUTO Vue 1"},"partial":false},{"class":"IconButton","pressedIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed.png","toolTipHorizontalAlign":"center","width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"horizontalAlign":"center","propagateClick":true,"pressedRollOverIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed_rollover.png","paddingLeft":0,"iconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464.png","paddingRight":0,"paddingBottom":0,"id":"IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","height":60,"verticalAlign":"middle","maxHeight":60,"borderRadius":0,"maxWidth":60,"mode":"toggle","minHeight":60,"data":{"name":"IconButton GYRO"},"transparencyActive":true,"minWidth":60,"shadow":false,"borderSize":0},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_FD413799_ED75_DB0F_41E3_92CE05E655EC"],"items":[{"image":"this.res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E","distance":50,"yaw":9.35,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-2.98,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_FD3A1728_ED75_DB0D_41E0_36D742E7560C"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_FC895DA5_ED75_2F07_41DD_4BFAE0186A47"],"items":[{"image":"this.res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E","distance":50,"yaw":68.49,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-1.57,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_FC8B8DA3_ED75_2F03_41C6_8CCAE570E9B4"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_E23C2E3A_ECD9_C88D_41BF_61561957DEA8"],"items":[{"image":"this.res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E","distance":50,"yaw":-90.43,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-1.12,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_E3012DDE_ECD9_CB85_41C7_9CBB0970BCCC"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_FC96776F_ECD9_B883_41E9_421DC79ECB41"],"items":[{"image":"this.res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E","distance":50,"yaw":-50.93,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-2.96,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_FC9A0759_ECD9_B88C_41DD_AC5D74748E23"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_FB2C617D_ED1F_27D0_41B8_0182453F20E3"],"items":[{"image":"this.res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E","distance":50,"yaw":-88.23,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-1.82,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_FB1C8101_ED1F_2731_41BB_1EC11C7472A2"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_E2D91925_ECD7_C887_41DC_ADEC7D1D8270"],"items":[{"image":"this.res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E","distance":50,"yaw":89.26,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-2.17,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_E3B568BD_ECD7_C987_41E1_E4C8C2B77F76"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_E3F48658_ECD6_588D_41EC_07BA8BB65ED3"],"items":[{"image":"this.res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E","distance":50,"yaw":127.43,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-6.36,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_E3C23655_ECD6_5887_41EB_341A5D74F5F3"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_FC5CCEF3_ECDE_C983_41D0_B3DB09D647D5"],"items":[{"image":"this.res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E","distance":50,"yaw":-168.83,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-3.7,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_FC5F0EF1_ECDE_C99F_41CB_96DE0D0F882A"},{"id":"HotspotPanoramaOverlayArea_FD413799_ED75_DB0F_41E3_92CE05E655EC","click":"this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"levels":[{"height":141,"width":141,"url":"media/res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_FCB4DC1F_ECDF_C883_41E2_2F905AB0A24E"},{"id":"HotspotPanoramaOverlayArea_FC895DA5_ED75_2F07_41DD_4BFAE0186A47","click":"this.mainPlayList.set('selectedIndex', 2)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_E23C2E3A_ECD9_C88D_41BF_61561957DEA8","click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_FC96776F_ECD9_B883_41E9_421DC79ECB41","click":"this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_FB2C617D_ED1F_27D0_41B8_0182453F20E3","click":"this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_E2D91925_ECD7_C887_41DC_ADEC7D1D8270","click":"this.mainPlayList.set('selectedIndex', 3)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_E3F48658_ECD6_588D_41EC_07BA8BB65ED3","click":"this.mainPlayList.set('selectedIndex', 2)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_FC5CCEF3_ECDE_C983_41D0_B3DB09D647D5","click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea"}],"scrollBarMargin":2,"backgroundPreloadEnabled":true,"mediaActivationMode":"window","height":"100%","backgroundColor":["#000000"],"children":["this.MainViewer","this.label4056","this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.IconButton_AC819C46_BF7C_0354_415E_028207B038AC","this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F"],"scripts":{"existsKey":TDV.Tour.Script.existsKey,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"translate":TDV.Tour.Script.translate,"resumePlayers":TDV.Tour.Script.resumePlayers,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMapLocation":TDV.Tour.Script.setMapLocation,"playAudioList":TDV.Tour.Script.playAudioList,"registerKey":TDV.Tour.Script.registerKey,"getKey":TDV.Tour.Script.getKey,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"clone":TDV.Tour.Script.clone,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"openLink":TDV.Tour.Script.openLink,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"init":TDV.Tour.Script.init,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"cloneCamera":TDV.Tour.Script.cloneCamera,"showWindow":TDV.Tour.Script.showWindow,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizStart":TDV.Tour.Script.quizStart,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizFinish":TDV.Tour.Script.quizFinish,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getMediaByName":TDV.Tour.Script.getMediaByName,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getMainViewer":TDV.Tour.Script.getMainViewer,"shareSocial":TDV.Tour.Script.shareSocial,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"mixObject":TDV.Tour.Script.mixObject,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"historyGoForward":TDV.Tour.Script.historyGoForward,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"downloadFile":TDV.Tour.Script.downloadFile,"getPixels":TDV.Tour.Script.getPixels,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"initQuiz":TDV.Tour.Script.initQuiz,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setLocale":TDV.Tour.Script.setLocale,"isPanorama":TDV.Tour.Script.isPanorama,"setValue":TDV.Tour.Script.setValue,"getOverlays":TDV.Tour.Script.getOverlays,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"historyGoBack":TDV.Tour.Script.historyGoBack,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"initAnalytics":TDV.Tour.Script.initAnalytics,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"getComponentByName":TDV.Tour.Script.getComponentByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData},"layout":"absolute","mobileMipmappingEnabled":false,"creationPolicy":"inAdvance","buttonToggleFullscreen":"this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","borderRadius":0,"scrollBarOpacity":0.5,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89,this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464], 'cardboardAvailable'); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF].forEach(function(component) { component.set('visible', false); }) }","contentOpaque":false,"minHeight":20,"data":{"initialScale":0.65,"name":"Player28156","defaultLocale":"fr","locales":{"fr":"locale/fr.txt"},"textToSpeechConfig":{"volume":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"pitch":1,"stopBackgroundAudio":false,"rate":1}},"minWidth":20,"shadow":false,"desktopMipmappingEnabled":false,"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Thu Jun 6 2024