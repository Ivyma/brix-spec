<div bx-name="alimama/design/mobile/component/prompt/prompt"></div>
<div class="spec-section mb40">
    <div class="mb40">
        <div class="fontsize-20 mb10">定义</div>
        <p class="mb20">提示是指用户在操作过程中需要了解的信息或状况。</p>
    </div>
    <div class="mb40">
        <div class="fontsize-20 mb10">基础规范</div> 
        <p class="mb0">1、不影响用户的后续操作，或是不太重要的信息提示，以Toast形式展示；</p>
        <p class="mb0">2、会影响到用户的操作，需要用户对当前的提示信息进行确认或选择时，使用对话框形式展示。</p>
    </div>
    <div class="mb40">
        <div class="fontsize-20 mb10">使用场景</div> 
        <div class="example demo1">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景一：局部轻量反馈（Toast）
                        <p style="margin:0;color:#999;">（不影响用户的操作，或不太重要的信息以Toast形式展示。）</p>
                    </div> 
                </div> 
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap" style="border:none;margin:0px;">
                            <div class="loading toast promotfont">
                                <p style="font-size:16px;margin:0;color:#fff;">正在发送...</p> 
                            </div>
                            <div class="loading toast promotfont">
                                <p style="font-size:16px;margin:0;color:#fff;">加载中...</p> 
                            </div>
                            <div class="fail toast promotfont">
                                <p style="font-size:16px;margin:0;color:#fff;">操作失败</p> 
                            </div>
                            <div class="success toast promotfont">
                                <p style="font-size:16px;margin:0;color:#fff;">设置成功</p> 
                            </div>
                            <div class="smile toast promotfont">
                                <p style="font-size:16px;margin:0;color:#fff;">感谢反馈</p> 
                            </div>
                            <div class="cry toast promotfont">
                                <p style="font-size:16px;margin:0;color:#fff;">没有网络</p> 
                            </div>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <div class="loading toast promotfont">
                                    <p>正在发送...</p> 
                                </div>
                                <div class="loading toast promotfont">
                                    <p>加载中...</p> 
                                </div>
                                <div class="fail toast promotfont">
                                    <p>操作失败</p> 
                                </div>
                                <div class="success toast promotfont">
                                    <p>设置成功</p> 
                                </div>
                                <div class="smile toast promotfont">
                                    <p>感谢反馈</p> 
                                </div>
                                <div class="cry toast promotfont">
                                    <p>没有网络</p> 
                                </div> 
                             </code>
                         </pre> 
                    </div>
                </div> 
            </div> 
        </div>
        <!--demo1 end-->
        <div class="example demo1">
            <div class="content" style="overflow:hidden;">
                <div class="content-header">
                    <div>场景二：重要信息反馈（对话框） 
                        <p style="margin:0;color:#999;">（强提示，需要用户确认操作或选择的信息，才可进入下一步的操作。）</p>
                    </div> 
                </div> 
                <div class="content-body pd0">
                    <div class="content-show">
                       <div class="content-wrap">
                           <div class="demoPage mb20">
                              <div class="mask">
                                <div class="dialogs">
                                    <p class="text">通知文案通知文案,通知文案,通知文案,通知文案,通知文案.</p>
                                    <div class="btns single">
                                        <a href="javascript:;">确认</a> 
                                    </div>
                                </div> 
                              </div> 
                           </div> 
                           <div class="demoPage mb20">
                              <div class="mask">
                                <div class="dialogs">
                                    <p class="text">通知文案通知文案,通知文案,通知文案,通知文案,通知文案,通知文案,通知文案.</p>
                                    <div class="btns double">
                                        <a href="javascript:;" class="cancelBtn">取消</a> 
                                        <a href="javascript:;" class="nextStep">下一步</a>
                                    </div>
                                </div> 
                              </div> 
                           </div>
                           <div class="demoPage mb20">
                              <div class="mask">
                                <div class="dialogs">
                                    <p class="text"><strong>新版联盟App已发布</br></strong>新增分享赚功能，分享即有收益哦，立即更新吧。</p>
                                    <div class="btns double">
                                        <a href="javascript:;" class="cancelBtn">取消</a> 
                                        <a href="javascript:;" class="updateBtn">更新</a>
                                    </div>
                                </div> 
                              </div> 
                           </div>
                       </div> 
                    </div> 
                    <div class="content-pre">
                         <pre class="example-pre" style="border-top:none;">
                             <code class="hljs html xml">
                                <div class="mask">
                                    <div class="dialogs">
                                        <p class="text">通知文案通知文案,通知文案,通知文案,通知文案,通知文案.</p>
                                        <div class="btns single">
                                            <a href="javascript:;">确认</a> 
                                        </div>
                                    </div> 
                                </div>
                                <div class="mask">
                                    <div class="dialogs">
                                        <p class="text">通知文案通知文案,通知文案,通知文案,通知文案,通知文案,通知文案,通知文案.</p>
                                        <div class="btns double">
                                            <a href="javascript:;" class="cancelBtn">取消</a> 
                                            <a href="javascript:;" class="nextStep">下一步</a>
                                        </div>
                                    </div> 
                                </div>
                                <div class="mask">
                                    <div class="dialogs">
                                        <p class="text"><strong>新版联盟App已发布</br></strong>新增分享赚功能，分享即有收益哦，立即更新吧。</p>
                                        <div class="btns double">
                                            <a href="javascript:;" class="cancelBtn">取消</a> 
                                            <a href="javascript:;" class="updateBtn">更新</a>
                                        </div>
                                    </div> 
                                </div>
                             </code>
                         </pre> 
                    </div>
                </div> 
            </div> 
        </div>
    </div>
</div>

