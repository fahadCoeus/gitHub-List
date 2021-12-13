package gitHub.List;

import android.widget.DatePicker;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class MyViewManager extends SimpleViewManager<DatePicker> {
    private DatePicker datePicker;
    public static final String REACT_CLASS = "UIDatePicker";
    ReactApplicationContext mCallerContext;

    public MyViewManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected DatePicker createViewInstance(@NonNull ThemedReactContext reactContext) {

        return datePicker;
    }


}