function sfsi_plus_validationStep2() {
    if (SFSI("input").removeClass("inputError"), sfsi_validator(SFSI('input[name="sfsi_plus_rss_display"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_rss_url"]'), "url")) return sfsiplus_showErrorSuc("error", "Error : Invalid Rss url ", 2), SFSI('input[name="sfsi_plus_rss_url"]').addClass("inputError"), !1;

    if (SFSI(".tab2 > .sfsiplus_facebook_section").css("display") === "block") {
        if (sfsi_validator(SFSI('input[name="sfsi_plus_facebookPage_option"]'), "activte") && sfsi_validator(SFSI('input[name="sfsi_plus_facebookPage_option"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_facebookPage_url"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Invalid Facebook page url ", 2), SFSI('input[name="sfsi_plus_facebookPage_url"]').addClass("inputError"), !1;
    }

    if (SFSI(".tab2 > .sfsiplus_twitter_section").css("display") === "block") {
        if (sfsi_validator(SFSI('input[name="sfsi_plus_twitter_followme"]'), "activte") && sfsi_validator(SFSI('input[name="sfsi_plus_twitter_followme"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_twitter_followUserName"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Invalid Twitter UserName ", 2), SFSI('input[name="sfsi_plus_twitter_followUserName"]').addClass("inputError"), !1;
        if (sfsi_validator(SFSI('input[name="sfsi_plus_twitter_page"]'), "activte") && sfsi_validator(SFSI('input[name="sfsi_plus_twitter_page"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_twitter_pageURL"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Invalid twitter page Url ", 2), SFSI('input[name="sfsi_plus_twitter_pageURL"]').addClass("inputError"), !1;
    }

    if (SFSI(".tab2 > .sfsiplus_youtube_section").css("display") === "block") {
        if (sfsi_validator(SFSI('input[name="sfsi_plus_youtube_page"]'), "activte") && sfsi_validator(SFSI('input[name="sfsi_plus_youtube_page"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_youtube_pageUrl"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Invalid youtube Url ", 2), SFSI('input[name="sfsi_plus_youtube_pageUrl"]').addClass("inputError"), !1;
        if (sfsi_validator(SFSI('input[name="sfsi_plus_youtube_page"]'), "activte") && sfsi_validator(SFSI('input[name="sfsi_plus_youtube_follow"]'), "checked"))
            if ("name" == jQuery("input[name='sfsi_plus_youtubeusernameorid']:checked").val()) {
                if (!sfsi_validator(SFSI('input[name="sfsi_plus_ytube_user"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Invalid youtube user ", 2), SFSI('input[name="sfsi_plus_ytube_user"]').addClass("inputError"), !1
            } else if (!sfsi_validator(SFSI('input[name="sfsi_plus_ytube_chnlid"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Invalid youtube channel id", 2), SFSI('input[name="sfsi_plus_ytube_chnlid"]').addClass("inputError"), !1;
    }

    if (SFSI(".tab2 > .sfsiplus_pintrest_section").css("display") === "block") {
        if (sfsi_validator(SFSI('input[name="sfsi_plus_pinterest_page"]'), "activte") && sfsi_validator(SFSI('input[name="sfsi_plus_pinterest_page"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_pinterest_pageUrl"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Invalid pinterest page url ", 2), SFSI('input[name="sfsi_plus_pinterest_pageUrl"]').addClass("inputError"), !1;
    }

    if (SFSI(".tab2 > .sfsiplus_instagram_section").css("display") === "block") {
        if (sfsi_validator(SFSI('input[name="sfsi_plus_instagram_display"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_instagram_pageUrl"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Invalid Instagram url ", 2), SFSI('input[name="sfsi_plus_instagram_pageUrl"]').addClass("inputError"), !1;
    }
    
    if (SFSI(".tab2 > .sfsiplus_ria_section").css("display") === "block") {
        if (sfsi_validator(SFSI('input[name="sfsi_plus_ria_display"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_ria_pageUrl"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Invalid RateItAll url ", 2), SFSI('input[name="sfsi_plus_ria_pageUrl"]').addClass("inputError"), !1;
    }
    
    if (SFSI(".tab2 > .sfsiplus_inha_section").css("display") === "block") {
        if (sfsi_validator(SFSI('input[name="sfsi_plus_inha_display"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_inha_pageUrl"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Invalid IncreasingHappiness url ", 2), SFSI('input[name="sfsi_plus_inha_pageUrl"]').addClass("inputError"), !1;
    }

    if (SFSI(".tab2 > .sfsiplus_houzz_section").css("display") === "block") {
        if (sfsi_validator(SFSI('input[name="sfsi_plus_houzz_display"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_houzz_pageUrl"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Invalid Houzz url ", 2), SFSI('input[name="sfsi_plus_houzz_pageUrl"]').addClass("inputError"), !1;
    }

    if (SFSI(".tab2 > .sfsiplus_linkedin_section").css("display") === "block") {
        if (sfsi_validator(SFSI('input[name="sfsi_plus_linkedin_page"]'), "activte") && sfsi_validator(SFSI('input[name="sfsi_plus_linkedin_page"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_linkedin_pageURL"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Invalid LinkedIn page url ", 2), SFSI('input[name="sfsi_plus_linkedin_pageURL"]').addClass("inputError"), !1;
        if (sfsi_validator(SFSI('input[name="sfsi_plus_linkedin_recommendBusines"]'), "activte") && sfsi_validator(SFSI('input[name="sfsi_plus_linkedin_recommendBusines"]'), "checked") && (!sfsi_validator(SFSI('input[name="sfsi_plus_linkedin_recommendProductId"]'), "blank") || !sfsi_validator(SFSI('input[name="sfsi_plus_linkedin_recommendCompany"]'), "blank"))) return sfsiplus_showErrorSuc("error", "Error : Please Enter Product Id and Company for LinkedIn Recommendation ", 2), SFSI('input[name="sfsi_plus_linkedin_recommendProductId"]').addClass("inputError"), SFSI('input[name="sfsi_plus_linkedin_recommendCompany"]').addClass("inputError"), !1;
    }
    if (SFSI(".tab2 > .sfsiplus_weibo_section").css("display") === "block") {
        if (sfsi_validator(SFSI('input[name="sfsi_plus_weibo_display"]'), "checked") && (sfsi_validator(SFSI('input[name="sfsi_plus_weiboVisit_option"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_weiboVisit_url"]'), "blank"))) return sfsiplus_showErrorSuc("error", "Error : Invalid weibo url ", 2), SFSI('input[name="sfsi_plus_weiboVisit_url"]').addClass("inputError"), !1;
    }

    if (SFSI(".tab2 > .sfsiplus_vk_section").css("display") === "block") {
        if (sfsi_validator(SFSI('input[name="sfsi_plus_vk_display"]'), "checked") && (sfsi_validator(SFSI('input[name="sfsi_plus_vkVisit_option"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_vkVisit_url"]'), "blank"))) return sfsiplus_showErrorSuc("error", "Error : Invalid vk url ", 2), SFSI('input[name="sfsi_plus_vkVisit_url"]').addClass("inputError"), !1;
    }

    if (SFSI(".tab2 > .sfsiplus_telegram_section").css("display") === "block") {
        if (sfsi_validator(SFSI('input[name="sfsi_plus_telegram_display"]'), "checked") && ( !sfsi_validator(SFSI('input[name="sfsi_plus_telegram_message"]'), "blank"))) return sfsiplus_showErrorSuc("error", "Error : Please enter telegram pre-filled message", 2), SFSI('input[name="sfsi_plus_telegram_message"]').addClass("inputError"), !1;
        if (sfsi_validator(SFSI('input[name="sfsi_plus_telegram_display"]'), "checked") && ( !sfsi_validator(SFSI('input[name="sfsi_plus_telegram_username"]'), "blank"))) return sfsiplus_showErrorSuc("error", "Error : Please enter telegram username", 2), SFSI('input[name="sfsi_plus_telegram_username"]').addClass("inputError"), !1;
    }

    if (SFSI(".tab2 > .sfsiplus_ok_section").css("display") === "block") {
        if (sfsi_validator(SFSI('input[name="sfsi_plus_ok_display"]'), "checked") && (sfsi_validator(SFSI('input[name="sfsi_plus_okVisit_option"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_okVisit_url"]'), "blank"))) return sfsiplus_showErrorSuc("error", "Error : Invalid ok url ", 2), SFSI('input[name="sfsi_plus_okVisit_url"]').addClass("inputError"), !1;
        if (sfsi_validator(SFSI('input[name="sfsi_plus_ok_display"]'), "checked") && (sfsi_validator(SFSI('input[name="sfsi_plus_okSubscribe_option"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_okSubscribe_userid"]'), "blank"))) return sfsiplus_showErrorSuc("error", "Error : Invalid ok userid ", 2), SFSI('input[name="sfsi_plus_okSubscribe_userid"]').addClass("inputError"), !1;
    }

    if (SFSI(".tab2 > .sfsiplus_houzz_section").css("display") === "block") {
        if (sfsi_validator(SFSI('input[name="sfsi_plus_houzz_display"]'), "checked") //&& sfsi_validator(SFSI('input[name="sfsi_plus_houzzVisit_option"]'), "checked") // 
            && !sfsi_validator(SFSI('input[name="sfsi_plus_houzz_pageUrl"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Invalid houzz url ", 2), SFSI('input[name="sfsi_plus_houzz_pageUrl"]').addClass("inputError"), !1;
    }

    if (SFSI(".tab2 > .sfsiplus_mastodon_section").css("display") === "block") {
        if (sfsi_validator(SFSI('input[name="sfsi_plus_mastodon_display"]'), "checked") && (sfsi_validator(SFSI('input[name="sfsi_plus_mastodonVisit_option"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_mastodon_pageUrl"]'), "blank"))) return sfsiplus_showErrorSuc("error", "Error : Invalid mastodon url ", 2), SFSI('input[name="sfsi_plus_mastodon_pageUrl"]').addClass("inputError"), !1;
    }

    if (SFSI(".tab2 > .sfsiplus_ria_section").css("display") === "block") {
        if (sfsi_validator(SFSI('input[name="sfsi_plus_ria_display"]'), "checked") && (sfsi_validator(SFSI('input[name="sfsi_plus_riaVisit_option"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_ria_pageUrl"]'), "blank"))) return sfsiplus_showErrorSuc("error", "Error : Invalid ria url ", 2), SFSI('input[name="sfsi_plus_ria_pageUrl"]').addClass("inputError"), !1;
    }

    if (SFSI(".tab2 > .sfsiplus_inha_section").css("display") === "block") {
        if (sfsi_validator(SFSI('input[name="sfsi_plus_inha_display"]'), "checked") && (sfsi_validator(SFSI('input[name="sfsi_plus_inhaVisit_option"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_inha_pageUrl"]'), "blank"))) return sfsiplus_showErrorSuc("error", "Error : Invalid inha url ", 2), SFSI('input[name="sfsi_plus_inha_pageUrl"]').addClass("inputError"), !1;
    }

    var s = 0;
    return SFSI("input[name='sfsi_plus_CustomIcon_links[]']").each(function () {
        //sfsi_validator(SFSI(this), "blank") && sfsi_validator(SFSI(SFSI(this)), "url") || (sfsiplus_showErrorSuc("error", "Error : Please Enter a valid Custom link ", 2), SFSI(this).addClass("inputError"), s = 1)
        sfsi_validator(SFSI(this), "blank") || (sfsiplus_showErrorSuc("error", "Error : Please Enter a valid Custom link ", 2), SFSI(this).addClass("inputError"), s = 1)
    }), s ? !1 : !0
}

function sfsi_plus_validationStep3() {
    return SFSI("input").removeClass("inputError"), sfsi_validator(SFSI('input[name="sfsi_plus_shuffle_icons"]'), "activte") && sfsi_validator(SFSI('input[name="sfsi_plus_shuffle_icons"]'), "checked") && !(sfsi_validator(SFSI('input[name="sfsi_plus_shuffle_Firstload"]'), "activte") && sfsi_validator(SFSI('input[name="sfsi_plus_shuffle_Firstload"]'), "checked") || sfsi_validator(SFSI('input[name="sfsi_plus_shuffle_interval"]'), "activte") && sfsi_validator(SFSI('input[name="sfsi_plus_shuffle_interval"]'), "checked")) ? (sfsiplus_showErrorSuc("error", "Error : Please Chose a Shuffle option ", 3), SFSI('input[name="sfsi_plus_shuffle_Firstload"]').addClass("inputError"), SFSI('input[name="sfsi_plus_shuffle_interval"]').addClass("inputError"), !1) : sfsi_validator(SFSI('input[name="sfsi_plus_shuffle_icons"]'), "checked") || !sfsi_validator(SFSI('input[name="sfsi_plus_shuffle_Firstload"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_shuffle_interval"]'), "checked") ? !sfsi_validator(SFSI('input[name="sfsi_plus_shuffle_interval"]'), "activte") || !sfsi_validator(SFSI('input[name="sfsi_plus_shuffle_interval"]'), "checked") || sfsi_validator(SFSI('input[name="sfsi_plus_shuffle_intervalTime"]'), "blank") && sfsi_validator(SFSI('input[name="sfsi_plus_shuffle_intervalTime"]'), "int") ? !0 : (sfsiplus_showErrorSuc("error", "Error : Invalid shuffle time interval", 3), SFSI('input[name="sfsi_plus_shuffle_intervalTime"]').addClass("inputError"), !1) : (sfsiplus_showErrorSuc("error", 'Error : Please check "Shuffle them automatically" option also ', 3), SFSI('input[name="sfsi_plus_shuffle_Firstload"]').addClass("inputError"), SFSI('input[name="sfsi_plus_shuffle_interval"]').addClass("inputError"), !1)
}

function sfsi_plus_validationStep4() {
    if (sfsi_validator(SFSI('input[name="sfsi_plus_email_countsDisplay"]'), "activte") && sfsi_validator(SFSI('input[name="sfsi_plus_email_countsDisplay"]'), "checked") && "manual" == SFSI('input[name="sfsi_plus_email_countsFrom"]:checked').val() && !sfsi_validator(SFSI('input[name="sfsi_plus_email_manualCounts"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Please Enter manual counts for Email icon ", 4), SFSI('input[name="sfsi_plus_email_manualCounts"]').addClass("inputError"), !1;
    if (sfsi_validator(SFSI('input[name="sfsi_plus_rss_countsDisplay"]'), "activte") && sfsi_validator(SFSI('input[name="sfsi_plus_rss_countsDisplay"]'), "checked") && !sfsi_validator(SFSI('input[name="sfsi_plus_rss_manualCounts"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Please Enter manual counts for Rss icon ", 4), SFSI('input[name="sfsi_plus_rss_countsDisplay"]').addClass("inputError"), !1;
    if (sfsi_validator(SFSI('input[name="sfsi_plus_facebook_countsDisplay"]'), "activte") && sfsi_validator(SFSI('input[name="sfsi_plus_facebook_countsDisplay"]'), "checked") && "manual" == SFSI('input[name="sfsi_plus_facebook_countsFrom"]:checked').val() && !sfsi_validator(SFSI('input[name="sfsi_plus_facebook_manualCounts"]'), "blank") && !sfsi_validator(SFSI('input[name="sfsi_plus_facebook_manualCounts"]'), "url")) return sfsiplus_showErrorSuc("error", "Error : Please Enter a valid facebook manual counts ", 4), SFSI('input[name="sfsi_plus_facebook_manualCounts"]').addClass("inputError"), !1;

    if (sfsi_validator(SFSI('input[name="sfsi_plus_twitter_countsDisplay"]'), "activte") && sfsi_validator(SFSI('input[name="sfsi_plus_twitter_countsDisplay"]'), "checked")) {
        if ("source" == SFSI('input[name="sfsi_plus_twitter_countsFrom"]:checked').val()) {
            if (!sfsi_validator(SFSI('input[name="sfsiplus_tw_consumer_key"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Please Enter a valid consumer key", 4), SFSI('input[name="sfsiplus_tw_consumer_key"]').addClass("inputError"), !1;
            if (!sfsi_validator(SFSI('input[name="sfsiplus_tw_consumer_secret"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Please Enter a valid consume secret ", 4), SFSI('input[name="sfsiplus_tw_consumer_secret"]').addClass("inputError"), !1;
            if (!sfsi_validator(SFSI('input[name="sfsiplus_tw_oauth_access_token"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Please Enter a valid oauth access token", 4), SFSI('input[name="sfsiplus_tw_oauth_access_token"]').addClass("inputError"), !1;
            if (!sfsi_validator(SFSI('input[name="sfsiplus_tw_oauth_access_token_secret"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Please Enter a oAuth access token secret", 4), SFSI('input[name="sfsiplus_tw_oauth_access_token_secret"]').addClass("inputError"), !1
        }
        if ("manual" == SFSI('input[name="sfsi_plus_linkedIn_countsFrom"]:checked').val() && !sfsi_validator(SFSI('input[name="sfsi_plus_twitter_manualCounts"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Please Enter Twitter manual counts ", 4), SFSI('input[name="sfsi_plus_twitter_manualCounts"]').addClass("inputError"), !1
    }
    if (sfsi_validator(SFSI('input[name="sfsi_plus_linkedIn_countsDisplay"]'), "activte") && sfsi_validator(SFSI('input[name="sfsi_plus_linkedIn_countsDisplay"]'), "checked")) {
        if ("follower" == SFSI('input[name="sfsi_plus_linkedIn_countsFrom"]:checked').val()) {
            if (!sfsi_validator(SFSI('input[name="sfsi_plus_ln_company"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Please Enter a valid company name", 4), SFSI('input[name="sfsi_plus_ln_company"]').addClass("inputError"), !1;
            if (!sfsi_validator(SFSI('input[name="sfsi_plus_ln_api_key"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Please Enter a valid API key ", 4), SFSI('input[name="sfsi_plus_ln_api_key"]').addClass("inputError"), !1;
            if (!sfsi_validator(SFSI('input[name="sfsi_plus_ln_secret_key"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Please Enter a valid secret ", 4), SFSI('input[name="sfsi_plus_ln_secret_key"]').addClass("inputError"), !1;
            if (!sfsi_validator(SFSI('input[name="sfsi_plus_ln_oAuth_user_token"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Please Enter a oAuth Access Token", 4), SFSI('input[name="sfsi_plus_ln_oAuth_user_token"]').addClass("inputError"), !1
        }
        if ("manual" == SFSI('input[name="sfsi_plus_linkedIn_countsFrom"]:checked').val() && !sfsi_validator(SFSI('input[name="sfsi_plus_linkedIn_manualCounts"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Please Enter LinkedIn manual counts ", 4), SFSI('input[name="sfsi_plus_linkedIn_manualCounts"]').addClass("inputError"), !1
    }
    if (sfsi_validator(SFSI('input[name="sfsi_plus_youtube_countsDisplay"]'), "activte") && sfsi_validator(SFSI('input[name="sfsi_plus_youtube_countsDisplay"]'), "checked")) {
        if ("subscriber" == SFSI('input[name="sfsi_plus_youtube_countsFrom"]:checked').val() && !sfsi_validator(SFSI('input[name="sfsi_plus_youtube_user"]'), "blank") && !sfsi_validator(SFSI('input[name="sfsi_plus_youtube_channelId"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Please Enter a youtube user name or channel id", 4), SFSI('input[name="sfsi_plus_youtube_user"]').addClass("inputError"), SFSI('input[name="sfsi_plus_youtube_channelId"]').addClass("inputError"), !1;
        if ("manual" == SFSI('input[name="sfsi_plus_youtube_countsFrom"]:checked').val() && !sfsi_validator(SFSI('input[name="sfsi_plus_youtube_manualCounts"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Please Enter youtube manual counts ", 4), SFSI('input[name="sfsi_plus_youtube_manualCounts"]').addClass("inputError"), !1
    }
    if (sfsi_validator(SFSI('input[name="sfsi_plus_pinterest_countsDisplay"]'), "activte") && sfsi_validator(SFSI('input[name="sfsi_plus_pinterest_countsDisplay"]'), "checked") && "manual" == SFSI('input[name="sfsi_plus_pinterest_countsFrom"]:checked').val() && !sfsi_validator(SFSI('input[name="sfsi_plus_pinterest_manualCounts"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Please Enter Pinterest manual counts ", 4), SFSI('input[name="sfsi_plus_pinterest_manualCounts"]').addClass("inputError"), !1;
    if (sfsi_validator(SFSI('input[name="sfsi_plus_instagram_countsDisplay"]'), "activte") && sfsi_validator(SFSI('input[name="sfsi_plus_instagram_countsDisplay"]'), "checked")) {
        if ("manual" == SFSI('input[name="sfsi_plus_instagram_countsFrom"]:checked').val() && !sfsi_validator(SFSI('input[name="sfsi_plus_instagram_manualCounts"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Please Enter Instagram manual counts ", 4), SFSI('input[name="sfsi_plus_instagram_manualCounts"]').addClass("inputError"), !1;
        if ("followers" == SFSI('input[name="sfsi_plus_instagram_countsFrom"]:checked').val() && !sfsi_validator(SFSI('input[name="sfsi_plus_instagram_User"]'), "blank")) return sfsiplus_showErrorSuc("error", "Error : Please Enter a instagram user name", 4), SFSI('input[name="sfsi_plus_instagram_User"]').addClass("inputError"), !1
    }
    return 1;
}

function sfsi_plus_validationStep5() {
    return sfsi_validator(SFSI('input[name="sfsi_plus_icons_size"]'), "int") ? parseInt(SFSI('input[name="sfsi_plus_icons_size"]').val()) > 100 ? (sfsiplus_showErrorSuc("error", "Error : Icons Size allow  100px maximum ", 5), SFSI('input[name="sfsi_plus_icons_size"]').addClass("inputError"), !1) : parseInt(SFSI('input[name="sfsi_plus_icons_size"]').val()) <= 0 ? (sfsiplus_showErrorSuc("error", "Error : Icons Size should be more than 0 ", 5), SFSI('input[name="sfsi_plus_icons_size"]').addClass("inputError"), !1) : sfsi_validator(SFSI('input[name="sfsi_plus_icons_spacing"]'), "int") ? parseInt(SFSI('input[name="sfsi_plus_icons_spacing"]').val()) < 0 ? (sfsiplus_showErrorSuc("error", "Error : Icons Spacing should be 0 or more", 5), SFSI('input[name="sfsi_plus_icons_spacing"]').addClass("inputError"), !1) : sfsi_validator(SFSI('input[name="sfsi_plus_icons_perRow"]'), "int") ? parseInt(SFSI('input[name="sfsi_plus_icons_perRow"]').val()) <= 0 ? (sfsiplus_showErrorSuc("error", "Error : Icons Per row should be more than 0", 5), SFSI('input[name="sfsi_plus_icons_perRow"]').addClass("inputError"), !1) : "yes" == SFSI('input[name="sfsi_plus_icons_float"]:checked').val() && "yes" == SFSI('input[name="sfsi_plus_icons_stick"]:checked').val() ? (sfsiplus_showErrorSuc("error", "Error : Only one allow from Sticking & floating ", 5), SFSI('input[name="sfsi_plus_icons_float"][value="no"]').prop("checked", !0), !1) : !0 : (sfsiplus_showErrorSuc("error", "Error : Please enter a numeric value only ", 5), SFSI('input[name="sfsi_plus_icons_perRow"]').addClass("inputError"), !1) : (sfsiplus_showErrorSuc("error", "Error : Please enter a numeric value only ", 5), SFSI('input[name="sfsi_plus_icons_spacing"]').addClass("inputError"), !1) : (sfsiplus_showErrorSuc("error", "Error : Please enter a numeric value only ", 5), SFSI('input[name="sfsi_plus_icons_size"]').addClass("inputError"), !1)
}

function sfsi_plus_validationStep7() {
    return sfsi_validator(SFSI('input[name="sfsi_plus_popup_border_thickness"]'), "int") ? sfsi_validator(SFSI('input[name="sfsi_plus_popup_fontSize"]'), "int") ? "once" != SFSI('input[name="sfsi_plus_Shown_pop"]:checked').val() || sfsi_validator(SFSI('input[name="sfsi_plus_Shown_popupOnceTime"]'), "blank") || sfsi_validator(SFSI('input[name="sfsi_plus_Shown_popupOnceTime"]'), "url") ? "selectedpage" != SFSI('input[name="sfsi_plus_Show_popupOn"]:checked').val() || sfsi_validator(SFSI('input[name="sfsi_plus_Show_popupOn"]'), "blank") ? sfsi_validator(SFSI('input[name="sfsi_plus_icons_spacing"]'), "int") ? sfsi_validator(SFSI('input[name="sfsi_plus_icons_perRow"]'), "int") ? !0 : (sfsiplus_showErrorSuc("error", "Error : Please enter a numeric value only ", 7), SFSI('input[name="sfsi_plus_icons_perRow"]').addClass("inputError"), !1) : (sfsiplus_showErrorSuc("error", "Error : Please enter a numeric value only ", 7), SFSI('input[name="sfsi_plus_icons_spacing"]').addClass("inputError"), !1) : (sfsiplus_showErrorSuc("error", "Error : Please Enter page ids with comma  ", 7), SFSI('input[name="sfsi_plus_Show_popupOn"]').addClass("inputError"), !1) : (sfsiplus_showErrorSuc("error", "Error : Please Enter a valid pop up shown time ", 7), SFSI('input[name="sfsi_plus_Shown_popupOnceTime"]').addClass("inputError"), !1) : (sfsiplus_showErrorSuc("error", "Error : Please enter a numeric value only ", 7), SFSI('input[name="sfsi_plus_popup_fontSize"]').addClass("inputError"), !1) : (sfsiplus_showErrorSuc("error", "Error : Please enter a numeric value only ", 7), SFSI('input[name="sfsi_plus_popup_border_thickness"]').addClass("inputError"), !1)
}

function sfsi_validator(s, r) {
    var i = new RegExp("^(http|https|ftp)://([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9-]+.)*[a-zA-Z0-9-]+.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(/($|[a-zA-Z0-9.,@?'\\+&%$#=~_-]+))*$");
    switch (r) {
        case "blank":
            console.log(s);

            return s.val().trim() ? !0 : !1;
        case "url":
            return i.test(s.val().trim()) ? !0 : !1;
        case "checked":
            console.log(s);
            return (!s.attr("checked") == !0 ? !1 : !0) || (!s.is(':checked') == !0 ? !1 : !0) ;
        case "activte":
            return s.attr("disabled") ? !1 : !0;
        case "int":
            return isNaN(s.val()) ? !1 : !0
    }
}